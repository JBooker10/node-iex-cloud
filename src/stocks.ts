import {
  Estimates,
  Earnings,
  Dividends,
  CashFlow,
  DelayedQuote,
  CeoCompensation,
  Company,
  Chart,
  DynamicChart,
  FundOwnership,
  Income,
  Financials,
  InsiderRoster,
  InsiderSummary,
  Stats,
  Logo,
  Quote,
  Splits,
  InsiderTransactions,
  IntradayPrices,
  News,
  OHLC,
  InstitutionalOwnership,
  PriceTarget,
  RecommendationTrends,
  VolumeByVenue
} from "./types";

type Version = "beta" | "stable" | "v1" | string;

/**
     - Sandbox: set to true for devlopment data
     - Version. Example: beta
     - Publishable. All REST requests require a valid token and can be added to a url like ?token=YOUR_TOKEN_HERE

 */
interface Configuration {
  publishable: string;
  sandbox?: boolean;
  version?: Version;
}

export default class IEXCloudClient {
  private fetchFunc: typeof fetch;
  private publishable: string;
  private sandbox: boolean;
  private version: Version;
  private stockSymbol: string;
  private datatype: string;

  public constructor(
    fetchFunc: typeof fetch,
    { publishable, sandbox = false, version = "beta" }: Configuration
  ) {
    (this.fetchFunc = fetchFunc),
      (this.publishable = publishable),
      (this.version = version),
      (this.sandbox = sandbox),
      (this.datatype = "stock"),
      (this.stockSymbol = ""),
      (this.request = this.request);
  }

  /**
   * Data points are available per symbol and return individual plain text values. Retrieving individual data points is useful for Excel and Google Sheet users, and applications where a single, lightweight value is needed.
   */
  public dataPoints = (key = "") => {
    this.datatype = "data-points";
    return this.request(key);
  };

  /** TOPS provides IEX’s aggregated best quoted bid and offer position in near real time for all securities on IEX’s displayed limit order book. TOPS is ideal for developers needing both quote and trade data. */
  public tops = (...params: any) => {
    this.datatype = "tops/last";
    return this.request(`?symbols=${params}`);
  };

  /** Returns daily stats for a given time frame */
  public historicalStats = (params = "", date = "") => {
    this.datatype = "stats";
    return this.request(`${params}/${date}`);
  };

  public market = (params = ""): Promise<any> => {
    this.datatype = `stock/market`;
    return this.request(params);
  };

  public collection = ({ param, collectionName }: any) => {
    return this.request(`collection/${param}?collectionName=${collectionName}`);
  };

  /** Time series is the most common type of data available, and consists of a collection of data points over a period of time. Time series data is indexed by a single date field, and can be retrieved by any portion of time. To use this endpoint, you’ll first make a free call to get an inventory of available time series data.  */
  public timeSeries = ({ id, subkey = "" }: any) => {
    this.datatype = `time-series/${id}`;
    return this.request(`${subkey}`);
  };

  /** DEEP is used to receive real-time depth of book quotations direct from IEX. The depth of book quotations received via DEEP provide an aggregated size of resting displayed orders at a price and side, and do not indicate the size or number of individual orders at any price level. Non-displayed orders and non-displayed portions of reserve orders are not represented in DEEP. */
  public deep = (params = "") => {
    this.datatype = "deep";
    return this.request(params);
  };

  /**  Takes in a stock symbol, a unique series of letters assigned to a security   */
  public symbol = (symbol: string): IEXCloudClient => {
    this.stockSymbol = symbol;
    return this;
  };

  private setToken = (token: string): string => {
    return this.sandbox ? "T" + token : token;
  };

  private params = (params = ""): string => {
    const env = this.sandbox ? "sandbox" : "cloud";
    const url = `https://${env}.iexapis.com/${this.version}/${this.datatype}`;
    const operand = params.match(new RegExp("\\?", "g"));
    const q = operand && operand[0] === "?" ? "&" : "?";
    const request = `${url}/${
      this.stockSymbol
    }/${params}${q}token=${this.setToken(this.publishable)}`;

    if (this.datatype === "deep") {
      const request = `${url}/${params}?symbols=${
        this.stockSymbol
      }&token=${this.setToken(this.publishable)}`;
      this.datatype = "stock";
      return request;
    }

    if (this.datatype === "stats") {
      const request = `${url}/${params}${q}token=${this.setToken(
        this.publishable
      )}`;
      this.datatype = "stock";
      return request;
    }

    if (this.datatype === "tops/last" || this.datatype === "stock/market") {
      const request = `${url}/${params}${q}token=${this.setToken(
        this.publishable
      )}`;

      this.datatype = "stock";
      return request;
    }
    return request;
  };

  private batchParams = (...types: any): string => {
    const env = this.sandbox ? "sandbox" : "cloud";

    const request = `https://${env}.iexapis.com/${this.version}/${
      this.datatype
    }/${this.stockSymbol}/batch?types=${types.map(
      (type: any) => type
    )}&token=${this.setToken(this.publishable)}`;
    return request;
  };

  private request = async (params: string) => {
    try {
      const res = await this.fetchFunc(this.params(params));
      const contentType = res.headers.get("content-type");
      if (contentType === "application/json; charset=utf-8") {
        return await res.json();
      }

      if (res.status >= 400) {
        throw new Error(await res.text());
      }
    } catch (err) {
      console.error(err);
    }
  };

  /** batch returns multipe data-types for a give stock symbol */
  public batch = async (...params: any[]) => {
    try {
      const res = await this.fetchFunc(this.batchParams(params));
      const contentType = res.headers.get("content-type");

      if (contentType === "application/json; charset=utf-8") {
        return await res.json();
      }
      if (res.status >= 400) {
        throw new Error(await res.text());
      }
    } catch (err) {
      console.error(err);
    }
  };

  /** returns balance sheet data. Available quarterly or annually with the default being the last available quarter
   * `Data Weight: 3000`
   */
  public balanceSheet = (): Promise<any> => {
    return this.request(`balance-sheet`);
  };

  /**
   * returns book value for a given stock
   * `Data Weight: 1 per quote returned`
   */
  public book = (): Promise<any> => {
    return this.request("book");
  };

  /**
   * `Data Weight: 1,000 per symbol per period`
   */
  public chart = (range = "3m", date = ""): Promise<Chart[] | DynamicChart> => {
    return this.request(`chart/${range}/${date}`);
  };

  /**
   * returns cash flow data. Available quarterly or annually, with the default being the last available quarter.
   *
   * `Data Weight: 1,000 per symbol per period`
   */
  public cashFlow = (period = "quarter", { last = 1 }): Promise<CashFlow> => {
    return this.request(`cash-flow?period=${period}&last=${last}`);
  };

  /** returns Ceo Compensation */
  public ceoCompensation = (): Promise<CeoCompensation> => {
    return this.request("ceo-compensation");
  };

  /** returns data on a given company
   *  `Data Weight: 1 per symbol`
   */
  public company = (): Promise<Company> => {
    return this.request("company");
  };

  /**
   *  `Data Weight: 1 per symbol per quote`
   */
  public delayedQuote = (): Promise<DelayedQuote> => {
    return this.request("delayed-quote");
  };

  /**
   * `Data Weight: 10 per symbol per period returned`
   */
  public dividends = (range = "1m"): Promise<Dividends[]> => {
    return this.request(`dividends/${range}`);
  };

  /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
   *  `Data Weight: 1000 per symbol per period`
   */
  public earnings = (last = 1, { field = "" }): Promise<Earnings> => {
    return this.request(`earnings/${last}/${field}`);
  };

  /** Returns  */
  public estimates = (): Promise<Estimates> => {
    return this.request(`estimates`);
  };

  public financials = (period = "quarterly"): Promise<Financials> => {
    return this.request(`financials?period=${period}`);
  };

  public news = (last = 10): Promise<News[]> => {
    return this.request(`news/last/${last}`);
  };

  public fundOwnership = (): Promise<FundOwnership[]> => {
    return this.request("fund-ownership");
  };

  public income = (): Promise<Income> => {
    return this.request("income");
  };

  public insiderRoster = (): Promise<InsiderRoster[]> => {
    return this.request("insider-roster");
  };

  public insiderSummary = (): Promise<InsiderSummary[]> => {
    return this.request("insider-summary");
  };

  public insiderTransactions = (): Promise<InsiderTransactions[]> => {
    return this.request("insider-transactions");
  };

  public institutionalOwnership = (): Promise<InstitutionalOwnership[]> => {
    return this.request("institutional-ownership");
  };

  public intradayPrices = (): Promise<IntradayPrices[]> => {
    return this.request("intraday-prices");
  };

  public logo = (): Promise<Logo> => {
    return this.request("logo");
  };

  public largestTrades = (): Promise<any> => {
    return this.request("largest-trades");
  };

  public options = ({
    expiration = "",
    optionSide = ""
  }): Promise<string[] | any> => {
    return this.request(`options/${expiration}/${optionSide}`);
  };

  public peers = (): Promise<string[]> => {
    return this.request("peers");
  };

  public previous = (): Promise<any> => {
    return this.request("previous");
  };

  public price = (): Promise<number> => {
    return this.request("price");
  };

  public priceTarget = (): Promise<PriceTarget> => {
    return this.request("price-target");
  };

  public ohlc = (): Promise<OHLC> => {
    return this.request("ohlc");
  };

  public sentiment = (type = "daily", { date = "" }): Promise<any> => {
    return this.request(`sentiment/${type}/${date}`);
  };

  public quote = (field = ""): Promise<Quote> => {
    return this.request(`quote/${field}`);
  };

  public recommendationTrends = (): Promise<RecommendationTrends> => {
    return this.request("recommendation-trends");
  };

  public stats = (stat = ""): Promise<Stats> => {
    return this.request(`stats/${stat}`);
  };

  public splits = (range = "1m"): Promise<Splits[]> => {
    return this.request(`splits/${range}`);
  };

  public shortInterest = (date = ""): Promise<any> => {
    return this.request(`short-interest/${date}`);
  };

  public volumeByVenue = (): Promise<VolumeByVenue[]> => {
    return this.request("volume-by-venue");
  };
}
