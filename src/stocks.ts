import {
  Company,
  CeoCompensation,
  DelayedQuote,
  Dividends,
  Earnings
} from "./vendor";

type Version = "beta" | "stable" | "v1" | string;

interface Configuration {
  publishable: string;
  sandbox?: boolean;
  version?: Version;
}

export default class IEXCloud {
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

  public dataPoints = (key = "") => {
    this.datatype = "data-points";
    return this.request(key);
  };

  public timeSeries = ({ id, subkey = "" }: any) => {
    this.datatype = `time-series/${id}`;
    return this.request(`${subkey}`);
  };

  public symbol = (symbol: string): IEXCloud => {
    this.stockSymbol = symbol;
    return this;
  };

  private setToken = (token: string): string => {
    return this.sandbox ? "T" + token : token;
  };

  private params = (params = ""): string => {
    const env = this.sandbox ? "sandbox" : "cloud";
    const operand = params.match(new RegExp("\\?", "g"));
    const request = `https://${env}.iexapis.com/${this.version}/${
      this.datatype
    }/${this.stockSymbol}/${params}${
      operand && operand[0] === "?" ? "&" : "?"
    }token=${this.setToken(this.publishable)}`;
    console.log(request);
    return request;
  };

  private batchParams = (...types: any[]): string => {
    const env = this.sandbox ? "sandbox" : "cloud";
    const request = `https://${env}.iexapis.com/${this.version}/${
      this.datatype
    }/${this.stockSymbol}/batch?types=${types.map(
      (type: any) => type
    )}&token=${this.setToken(this.publishable)}`;
    console.log(request);
    return request;
  };

  private request = async (params: string) => {
    try {
      const res = await this.fetchFunc(this.params(params));
      const contentType = res.headers.get("content-type");
      if (contentType === "application/json; charset=utf-8") {
        return await res.json();
      }
    } catch (err) {
      console.log(err);
    }
  };

  public batch = async (...params: []) => {
    try {
      const res = await this.fetchFunc(this.batchParams("stock", params));
      const contentType = res.headers.get("content-type");
      if (contentType === "application/json; charset=utf-8") {
        return await res.json();
      }
    } catch (err) {
      console.log(err);
    }
  };

  public balanceSheet = (): Promise<any> => {
    return this.request(`balance-sheet`);
  };

  public book = (): Promise<any> => {
    return this.request("book");
  };

  public chart = (range = "3m", date = ""): Promise<any> => {
    return this.request(`chart/${range}/${date}`);
  };

  public cashFlow = (period = "quarter", last = 1): Promise<any> => {
    return this.request(`cash-flow?period=${period}&last=${last}`);
  };

  public ceoCompensation = (): Promise<CeoCompensation> => {
    return this.request("ceo-compensation");
  };

  public company = (): Promise<Company> => {
    return this.request("company");
  };

  public delayedQuote = (): Promise<DelayedQuote> => {
    return this.request("delayed-quote");
  };

  public dividends = (range = "1m"): Promise<Dividends> => {
    return this.request(`dividends/${range}`);
  };

  public earnings = ({ last = 1, field = "" }: any): Promise<Earnings> => {
    return this.request(`earnings/${last}/${field}`);
  };

  public estimates = (): Promise<any> => {
    return this.request(`estimates`);
  };

  public financials = (period = "quarterly"): Promise<any> => {
    return this.request(`financials?period=${period}`);
  };

  public news = (last = 10): Promise<any> => {
    return this.request(`news/last/${last}`);
  };

  public fundOwnership = (): Promise<any> => {
    return this.request("fund-ownership");
  };

  public income = (): Promise<any> => {
    return this.request("income");
  };

  public insiderRoster = (): Promise<any> => {
    return this.request("insider-roster");
  };

  public insiderSummary = (): Promise<any> => {
    return this.request("insider-summary");
  };

  public insiderTransactions = (): Promise<any> => {
    return this.request("insider-transactions");
  };

  public institutionalOwnership = (): Promise<any> => {
    return this.request("institutional-ownership");
  };

  public intradayPrices = (): Promise<any> => {
    return this.request("intraday-prices");
  };

  public logo = (): Promise<any> => {
    return this.request("logo");
  };

  public largestTrades = (): Promise<any> => {
    return this.request("largest-trades");
  };

  public options = ({ expiration = "", optionSide = "" }): Promise<any> => {
    return this.request(`options/${expiration}/${optionSide}`);
  };

  public peers = (): Promise<any> => {
    return this.request("peers");
  };

  public previous = (): Promise<any> => {
    return this.request("previous");
  };

  public price = (): Promise<any> => {
    return this.request("price");
  };

  public priceTarget = (): Promise<any> => {
    return this.request("price-target");
  };

  public ohlc = (): Promise<any> => {
    return this.request("ohlc");
  };

  public sentiment = ({ type = "daily", date = "" }): Promise<any> => {
    return this.request(`sentiment/${type}/${date}`);
  };

  public quote = (field = ""): Promise<any> => {
    return this.request(`quote/${field}`);
  };

  public recommendationTrends = (): Promise<any> => {
    return this.request("recommendation-trends");
  };

  public stats = (stat = ""): Promise<any> => {
    return this.request(`stats/${stat}`);
  };

  public splits = (range = "1m"): Promise<any> => {
    return this.request(`splits/${range}`);
  };

  public volumeByVenue = (): Promise<any> => {
    return this.request("volume-by-venue");
  };
}
