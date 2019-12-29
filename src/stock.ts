
import IEXRequest from "./request"
import * as iex from "./types";


class Stock {
    req: IEXRequest
    constructor(req: IEXRequest) {
        this.req = req
    }

  
     /** returns balance sheet data. Available quarterly or annually with the default being the last available quarter
   * `Data Weight: 3000`
   */
  public balanceSheet = (
    period?: iex.Period,
    last?: iex.Last
  ): Promise<iex.BalanceSheet> => {
    return this.req.request(
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
    return this.req.request("book");
  };


 

  /**
   * Returns adjusted and unadjusted historical data for up to 15 years.
   * `Data Weight: 1,000 per symbol per period`
   */
  public chart = (
    range: iex.Range,
    params: iex.ChartParams
  ): Promise<iex.Chart[] | iex.DynamicChart> => {
    // if range is 'date' & there's a 'date' param
    if (range === 'date' && (params && params.date)) {
      const keys: string[] = Object.keys(params);
      const paramsString: string = keys.length > 1
        ? `?${keys.reduce((str: string, key: string, i: number): string => {
          if (key !== 'date') {
            return `${str}${key}=${params[key]}${i < keys.length - 1 ? '&' : ''}`
          }
          return str;
        }, '')}`
        : '';
      return this.req.request(`chart/${range}/${params.date}${paramsString}`);
    }

    // in any other case
    const values = params && Object.entries(params);
    return this.req.request(`chart/${range}${params ? "?" + values.map((
      v: string[]
    ) => `${v[0]}=${v[1]}`).join("&") : ""}`);
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
    return this.req.request(`cash-flow?period=${period}&last=${last}`);
  };

  /** returns Ceo Compensation */
  public ceoCompensation = (): Promise<iex.CeoCompensation | any> => {
    return this.req.request("ceo-compensation");
  };

  /** returns data on a given company
   *  `Data Weight: 1 per symbol`
   */
  public company = (): Promise<iex.Company> => {
    return this.req.request("company");
  };

  /**
   *  `Data Weight: 1 per symbol per quote`
   */
  public delayedQuote = (): Promise<iex.DelayedQuote> => {
    return this.req.request("delayed-quote");
  };

  /**
   * `Data Weight: 10 per symbol per period returned`
   */
  public dividends = (range: iex.Range): Promise<iex.Dividends[]> => {
    return this.req.request(`dividends${range ? "/" + range : ""}`);
  };

  /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
   *  `Data Weight: 1000 per symbol per period`
   */
  public earnings = (
    last?: iex.Last,
    field?: string
  ): Promise<iex.Earnings> => {
    return this.req.request(
      `earnings${last ? "/" + last : ""}${field ? "/" + field : ""}`
    );
  };

  /** Provides the latest consensus estimate for the next fiscal period */
  public estimates = (): Promise<iex.Estimates> => {
    return this.req.request(`estimates`);
  };

  /** Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter. */
  public financials = (
    period: iex.Period = "quarterly"
  ): Promise<iex.Financials> => {
    return this.req.request(`financials?period=${period}`);
  };

  /** Returns latest news for a give stock symbol */
  public news = (last = 10): Promise<iex.News[]> => {
    return this.req.request(`news/last/${last}`);
  };

  /**
   * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
   */
  public fundOwnership = (): Promise<iex.FundOwnership[]> => {
    return this.req.request("fund-ownership");
  };

  /** Pulls income statement data. Available quarterly or annually with the default being the last available quarter. */
  public income = (period: iex.Period, last: iex.Last): Promise<iex.Income> => {
    return this.req.request(
      `income${period ? `?period=${period}` : ""}${last ? `&last=${last}` : ""}`
    );
  };

  /** Returns the top 10 insiders, with the most recent information. */
  public insiderRoster = (): Promise<iex.InsiderRoster[]> => {
    return this.req.request("insider-roster");
  };

  /** Returns aggregated insiders summary data for the last 6 months. */
  public insiderSummary = (): Promise<iex.InsiderSummary[]> => {
    return this.req.request("insider-summary");
  };

  /** Returns insider transactions. */
  public insiderTransactions = (): Promise<iex.InsiderTransactions[]> => {
    return this.req.request("insider-transactions");
  };

  /** 
  Returns the top 10 institutional holders, defined as buy-side or sell-side firms. */
  public institutionalOwnership = (): Promise<iex.InstitutionalOwnership[]> => {
    return this.req.request("institutional-ownership");
  };

  /** This endpoint will return aggregated intraday prices in one minute buckets */
  public intradayPrices = (): Promise<iex.IntradayPrices[]> => {
    return this.req.request("intraday-prices");
  };

  /** This is a helper function, but the google APIs url is standardized.  */
  public logo = (): Promise<iex.Logo> => {
    return this.req.request("logo");
  };

  /**  This returns 15 minute delayed, last sale eligible trades. */
  public largestTrades = (): Promise<iex.LargestTrades> => {
    return this.req.request("largest-trades");
  };

  /** Returns end of day options data */
  public options = (
    expiration = "",
    optionSide?: iex.OptionSide
  ): Promise<string[] | any> => {
    return this.req.request(
      `options${expiration ? "/" + expiration : ""}${
        optionSide ? "/" + optionSide : ""
      }`
    );
  };

  /** Returns peer group */
  public peers = (): Promise<string[]> => {
    return this.req.request("peers");
  };

  /** Returns previous day adjusted price data for one or more stocks. */
  public previous = (): Promise<iex.Chart> => {
    return this.req.request("previous");
  };

  /** Returns price of a stock */
  public price = (): Promise<number> => {
    return this.req.request("price");
  };

  /** Provides the latest avg, high, and low analyst price target for a symbol. */
  public priceTarget = (): Promise<iex.PriceTarget> => {
    return this.req.request("price-target");
  };

  /** Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices. */
  public ohlc = (): Promise<iex.OHLC> => {
    return this.req.request("ohlc");
  };

  /** 
This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date. */
  public sentiment = (
    type = "daily",
    date = null
  ): Promise<iex.DailySentiment[] | iex.MinuteSentiment[]> => {
    return this.req.request(`sentiment/${type}${date ? "/" + date : ""}`);
  };

  public quote = (field = ""): Promise<iex.Quote | iex.CryptoQuote> => {
    return this.req.request(`quote/${field ? field : ""}`);
  };

  /** Pulls data from the last four months. */
  public recommendationTrends = (): Promise<iex.RecommendationTrends> => {
    return this.req.request("recommendation-trends");
  };

  public stats = (stat = ""): Promise<iex.Stats> => {
    return this.req.request(`stats/${stat}`);
  };



  public upcomingEvents = (): Promise<any> => {
    return this.req.request("upcoming-events");
  };

  public upcomingEarnings = (): Promise<any> => {
    return this.req.request("upcoming-earnings");
  };

  public upcomingDividends = (): Promise<any> => {
    return this.req.request("upcoming-dividends");
  };

  public upcomingSplits = (): Promise<any> => {
    return this.req.request("upcoming-splits");
  };

  public upcomingIPOs= (): Promise<any> => {
    return this.req.request("upcoming-ipos");
  };

  public splits = (range: iex.Range = "1m"): Promise<iex.Splits[]> => {
    return this.req.request(`splits/${range}`);
  };

  public shortInterest = (date = ""): Promise<iex.ShortInterest[]> => {
    return this.req.request(`short-interest/${date}`);
  };

  /** This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage. */
  public volumeByVenue = (): Promise<iex.VolumeByVenue[]> => {
    return this.req.request("volume-by-venue");
  };
}

export default Stock;