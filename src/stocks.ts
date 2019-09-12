import * as iex from "./types";

export default class IEXCloudClient {
  private fetchFunc: typeof fetch;
  private publishable: string;
  private sandbox: boolean;
  private version: iex.Version;
  private stockSymbol: string;
  private stockSymbols: string[];
  private datatype: string;
  private cryptoCurrency: string;

  public constructor(
    fetchFunc: typeof fetch,
    { publishable, sandbox = false, version = "beta" }: iex.Configuration
  ) {
    (this.fetchFunc = fetchFunc),
      (this.publishable = publishable),
      (this.version = version),
      (this.sandbox = sandbox),
      (this.datatype = "stock"),
      (this.cryptoCurrency = ""),
      (this.stockSymbol = ""),
      (this.stockSymbols = []),
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
  public historicalStats = (
    params: iex.StatType,
    date?: string
  ): Promise<iex.HistoricalStats | iex.Recent[] | iex.IntraDay> => {
    this.datatype = "stats";
    return this.request(`${params ? params : ""}${date ? "/" + date : ""}`);
  };

  public market = (params = ""): Promise<iex.Quote[] | iex.Volume[] | any> => {
    this.datatype = `stock/market`;
    return this.request(params);
  };

  public collection = ({ param, collectionName }: any) => {
    return this.request(`collection/${param}?collectionName=${collectionName}`);
  };

  /** Time series is the most common type of data available, and consists of a collection of data points over a period of time. Time series data is indexed by a single date field, and can be retrieved by any portion of time. To use this endpoint, you’ll first make a free call to get an inventory of available time series data.  */
  public timeSeries = (id = "", subkey: string) => {
    this.datatype = `time-series/${id}`;
    return this.request(`${subkey}`);
  };

  /** DEEP is used to receive real-time depth of book quotations direct from IEX. The depth of book quotations received via DEEP provide an aggregated size of resting displayed orders at a price and side, and do not indicate the size or number of individual orders at any price level. Non-displayed orders and non-displayed portions of reserve orders are not represented in DEEP. */
  public deep = (params = ""): Promise<any> => {
    this.datatype = "deep";
    return this.request(params);
  };

  /**  Takes in a stock symbol, a unique series of letters assigned to a security   */
  public symbol = (symbol: string): IEXCloudClient => {
    this.stockSymbol = symbol;
    return this;
  };

  /** This will a quote for Cryptocurrencies supported by the IEX API. Each element is a standard */
  public crypto = (crypto: string): IEXCloudClient => {
    this.datatype = "crypto";
    this.cryptoCurrency = crypto;
    return this;
  };

  /**  Returns an array of symbols up to the top 10 matches.
   * Results will be sorted for relevancy. Search currently defaults to equities only, where the symbol returned is supported by endpoints listed under the Stocks category.
   * @params search by symbol or security name.
   */
  public search = (symbol: string): Promise<iex.Search[]> => {
    this.datatype = "search";
    return this.request(symbol);
  };

  /** Takes in multiple stock symbols, and batches them to a single request  */
  public symbols = (...symbols: string[]): IEXCloudClient => {
    this.datatype = "stock/market/batch";
    this.stockSymbols = symbols;
    return this;
  };

  private setToken = (token: string) => {
    return this.sandbox && token[0] !== "T" ? "T" + token : token;
  };

  private params = (params = ""): string => {
    const env = this.sandbox ? "sandbox" : "cloud";
    const url = `https://${env}.iexapis.com/${this.version}/${this.datatype}`;
    const operand = params.match(new RegExp("\\?", "g"));
    const q = operand && operand[0] === "?" ? "&" : "?";
    const pk = `token=${this.setToken(this.publishable)}`;
    const request = `${url}/${this.stockSymbol}/${params}${q}${pk}`;

    if (this.datatype === "deep") {
      const request = `${url}/${params}?symbols=${this.stockSymbol}&${pk}`;
      this.datatype = "stock";
      this.sandbox && console.log(request);
      return request;
    }

    if (this.datatype === "stock/market/batch") {
      const request = `${url}?symbols=${this.stockSymbols.map(
        symbol => symbol
      )}&types=${params}&${pk}`;
      this.datatype = "stock";
      this.sandbox && console.log(request);
      return request;
    }

    if (this.datatype === "stats") {
      const request = `${url}/${params}${q}${pk}}`;
      this.datatype = "stock";
      this.sandbox && console.log(request);
      return request;
    }

    if (this.datatype === "tops/last" || this.datatype === "stock/market") {
      const request = `${url}/${params}${q}${pk}`;
      this.datatype = "stock";
      this.sandbox && console.log(request);
      return request;
    }

    if (this.datatype === "crypto") {
      const request = `${url}/${this.cryptoCurrency}/${params}${q}${pk}`;
      this.datatype = "stock";
      this.sandbox && console.log(request);
      return request;
    }

    if (this.datatype === "search") {
      const request = `${url}/${params}${q}${pk}`;
      console.log(request);
      this.datatype = "stock";
      this.sandbox && console.log(request);
      return request;
    }

    this.sandbox && console.log(request);
    return request;
  };

  private batchParams = (...types: string[]): string => {
    const env = this.sandbox ? "sandbox" : "cloud";
    const url = `https://${env}.iexapis.com/${this.version}/${this.datatype}`;

    if (this.datatype === "stock/market/batch") {
      const request = `${url}/batch?symbols=${this.stockSymbols.map(
        symbol => symbol
      )}&types=${types.map((type: any) => type)}&token=${this.setToken(
        this.publishable
      )}`;
      this.datatype = "stock";
      this.sandbox && console.log(request);
      return request;
    }

    const request = `${url}/${this.stockSymbol}/batch?types=${types.map(
      (type: any) => type
    )}&token=${this.setToken(this.publishable)}`;
    this.sandbox && console.log(request);
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
  public batch = async (...params: any) => {
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
  public balanceSheet = (
    period?: iex.Period,
    last?: iex.Last
  ): Promise<iex.BalanceSheet> => {
    return this.request(
      `balance-sheet${period ? `?period=${period}` : ""}${
        last ? `&last=${last}` : ""
      }`
    );
  };

  /**
   * returns book value for a given stock
   * `Data Weight: 1 per quote returned`
   */
  public book = (): Promise<iex.Book> => {
    return this.request("book");
  };

  /**
   * Returns adjusted and unadjusted historical data for up to 15 years.
   * `Data Weight: 1,000 per symbol per period`
   */
  public chart = (
    range: iex.Range,
    params: iex.ChartParams
  ): Promise<iex.Chart[] | iex.DynamicChart> => {
    const values = params && Object.entries(params);
    return this.request(
      `chart/${range}${
        params ? "?" + values.map(v => `${v[0]}=${v[1]}`).join("&") : ""
      }`
    );
  };

  /**
   * returns cash flow data. Available quarterly or annually, with the default being the last available quarter.
   *
   * `Data Weight: 1,000 per symbol per period`
   */
  public cashFlow = (
    period: iex.Period = "quarterly",
    { last = 1 }
  ): Promise<iex.CashFlow> => {
    return this.request(`cash-flow?period=${period}&last=${last}`);
  };

  /** returns Ceo Compensation */
  public ceoCompensation = (): Promise<iex.CeoCompensation | any> => {
    return this.request("ceo-compensation");
  };

  /** returns data on a given company
   *  `Data Weight: 1 per symbol`
   */
  public company = (): Promise<iex.Company> => {
    return this.request("company");
  };

  /**
   *  `Data Weight: 1 per symbol per quote`
   */
  public delayedQuote = (): Promise<iex.DelayedQuote> => {
    return this.request("delayed-quote");
  };

  /**
   * `Data Weight: 10 per symbol per period returned`
   */
  public dividends = (range: iex.Range): Promise<iex.Dividends[]> => {
    return this.request(`dividends${range ? "/" + range : ""}`);
  };

  /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
   *  `Data Weight: 1000 per symbol per period`
   */
  public earnings = (
    last?: iex.Last,
    field?: string
  ): Promise<iex.Earnings> => {
    return this.request(
      `earnings${last ? "/" + last : ""}${field ? "/" + field : ""}`
    );
  };

  /** Provides the latest consensus estimate for the next fiscal period */
  public estimates = (): Promise<iex.Estimates> => {
    return this.request(`estimates`);
  };

  /** Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter. */
  public financials = (
    period: iex.Period = "quarterly"
  ): Promise<iex.Financials> => {
    return this.request(`financials?period=${period}`);
  };

  /** Returns latest news for a give stock symbol */
  public news = (last = 10): Promise<iex.News[]> => {
    return this.request(`news/last/${last}`);
  };

  /**
   * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
   */
  public fundOwnership = (): Promise<iex.FundOwnership[]> => {
    return this.request("fund-ownership");
  };

  /** Pulls income statement data. Available quarterly or annually with the default being the last available quarter. */
  public income = (period: iex.Period, last: iex.Last): Promise<iex.Income> => {
    return this.request(
      `income${period ? `?period=${period}` : ""}${last ? `&last=${last}` : ""}`
    );
  };

  /** Returns the top 10 insiders, with the most recent information. */
  public insiderRoster = (): Promise<iex.InsiderRoster[]> => {
    return this.request("insider-roster");
  };

  /** Returns aggregated insiders summary data for the last 6 months. */
  public insiderSummary = (): Promise<iex.InsiderSummary[]> => {
    return this.request("insider-summary");
  };

  /** Returns insider transactions. */
  public insiderTransactions = (): Promise<iex.InsiderTransactions[]> => {
    return this.request("insider-transactions");
  };

  /** 
  Returns the top 10 institutional holders, defined as buy-side or sell-side firms. */
  public institutionalOwnership = (): Promise<iex.InstitutionalOwnership[]> => {
    return this.request("institutional-ownership");
  };

  /** This endpoint will return aggregated intraday prices in one minute buckets */
  public intradayPrices = (): Promise<iex.IntradayPrices[]> => {
    return this.request("intraday-prices");
  };

  /** This is a helper function, but the google APIs url is standardized.  */
  public logo = (): Promise<iex.Logo> => {
    return this.request("logo");
  };

  /**  This returns 15 minute delayed, last sale eligible trades. */
  public largestTrades = (): Promise<iex.LargestTrades> => {
    return this.request("largest-trades");
  };

  /** Returns end of day options data */
  public options = (
    expiration = "",
    optionSide?: iex.OptionSide
  ): Promise<string[] | any> => {
    return this.request(
      `options${expiration ? "/" + expiration : ""}${
        optionSide ? "/" + optionSide : ""
      }`
    );
  };

  /** Returns peer group */
  public peers = (): Promise<string[]> => {
    return this.request("peers");
  };

  /** Returns previous day adjusted price data for one or more stocks. */
  public previous = (): Promise<iex.Chart> => {
    return this.request("previous");
  };

  /** Returns price of a stock */
  public price = (): Promise<number> => {
    return this.request("price");
  };

  /** Provides the latest avg, high, and low analyst price target for a symbol. */
  public priceTarget = (): Promise<iex.PriceTarget> => {
    return this.request("price-target");
  };

  /** Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices. */
  public ohlc = (): Promise<iex.OHLC> => {
    return this.request("ohlc");
  };

  /** 
This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date. */
  public sentiment = (
    type = "daily",
    date = null
  ): Promise<iex.DailySentiment[] | iex.MinuteSentiment[]> => {
    return this.request(`sentiment/${type}${date ? "/" + date : ""}`);
  };

  public quote = (field = ""): Promise<iex.Quote | iex.CryptoQuote> => {
    return this.request(`quote/${field ? field : ""}`);
  };

  /** Pulls data from the last four months. */
  public recommendationTrends = (): Promise<iex.RecommendationTrends> => {
    return this.request("recommendation-trends");
  };

  public stats = (stat = ""): Promise<iex.Stats> => {
    return this.request(`stats/${stat}`);
  };

  public splits = (range: iex.Range = "1m"): Promise<iex.Splits[]> => {
    return this.request(`splits/${range}`);
  };

  public shortInterest = (date = ""): Promise<iex.ShortInterest[]> => {
    return this.request(`short-interest/${date}`);
  };

  /** This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage. */
  public volumeByVenue = (): Promise<iex.VolumeByVenue[]> => {
    return this.request("volume-by-venue");
  };
}
