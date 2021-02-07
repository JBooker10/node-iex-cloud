import IEXRequest from "./request";
import Forex from "./forex";
import * as iex from "./types";
import Batch from "./batch";

class Stocks {
  constructor(private req: IEXRequest) {
    this.req = req;
  }

  /** returns balance sheet data. Available quarterly or annually with the default being the last available quarter
   * `Data Weight: 3000`
   */
  public balanceSheet = (): Promise<any> => this.req.request(`balance-sheet`);

  /** batch returns multipe data-types for a give stock symbol */
  public batch = (): Batch => {
    return new Batch(this.req);
  };

  public forex = (): Forex => {
    this.req.datatype = `fx`;
    return new Forex(this.req);
  };

  /**
   * returns book value for a given stock
   * `Data Weight: 1 per quote returned`
   */
  public book = (): Promise<any> => this.req.request("book");

  /**
   * Returns adjusted and unadjusted historical data for up to 15 years.
   * `Data Weight: 1,000 per symbol per period`
   */
  public chart = (): Promise<any> => this.req.request(`chart`);

  /**
   * returns cash flow data. Available quarterly or annually, with the default being the last available quarter.
   * `Data Weight: 1,000 per symbol per period`
   */
  public cashFlow = (): Promise<any> => this.req.request(`cash-flow`);

  /** returns Ceo Compensation */
  public ceoCompensation = (): Promise<any> =>
    this.req.request("ceo-compensation");

  /** returns data on a given company
   *  `Data Weight: 1 per symbol` */
  public company = (): Promise<any> => this.req.request("company");

  /**
   *  `Data Weight: 1 per symbol per quote`
   */
  public delayedQuote = (): Promise<any> => this.req.request("delayed-quote");

  /**
   * `Data Weight: 10 per symbol per period returned`
   */
  public dividends = (): Promise<any> => this.req.request(`dividends`);

  /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
   *  `Data Weight: 1000 per symbol per period`
   */
  public earnings = (): Promise<any> => this.req.request(`earnings`);

  /** Provides the latest consensus estimate for the next fiscal period */
  public estimates = (): Promise<iex.Estimates> => {
    return this.req.request(`estimates`);
  };

  /** Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter. */
  public financials = (): Promise<any> => this.req.request(`financials`);

  /** Returns latest news for a give stock symbol */
  public news = (): Promise<any> => this.req.request(`news`);

  /**
   * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
   */
  public fundOwnership = (): Promise<any> => this.req.request("fund-ownership");

  /** Pulls income statement data. Available quarterly or annually with the default being the last available quarter. */
  public income = (): Promise<any> => this.req.request(`income`);

  /** Returns the top 10 insiders, with the most recent information. */
  public insiderRoster = (): Promise<any> => this.req.request("insider-roster");

  /** Returns aggregated insiders summary data for the last 6 months. */
  public insiderSummary = (): Promise<any> =>
    this.req.request("insider-summary");

  /** Returns insider transactions. */
  public insiderTransactions = (): Promise<any> =>
    this.req.request("insider-transactions");

  /** 
  Returns the top 10 institutional holders, defined as buy-side or sell-side firms. */
  public institutionalOwnership = (): Promise<any> =>
    this.req.request("institutional-ownership");

  /** This endpoint will return aggregated intraday prices in one minute buckets */
  public intradayPrices = (): Promise<any> =>
    this.req.request("intraday-prices");

  /** This is a helper function, but the google APIs url is standardized.  */
  public logo = (): Promise<any> => this.req.request("logo");

  /**  This returns 15 minute delayed, last sale eligible trades. */
  public largestTrades = (): Promise<any> => this.req.request("largest-trades");

  /** Returns end of day options data */
  public options = (): Promise<any> => this.req.request(`options`);

  /** Returns peer group */
  public peers = (): Promise<string[]> => this.req.request("peers");

  /** Returns previous day adjusted price data for one or more stocks. */
  public previous = (): Promise<any> => this.req.request("previous");

  /** Returns price of a stock */
  public price = (): Promise<number> => this.req.request("price");

  /** Provides the latest avg, high, and low analyst price target for a symbol. */
  public priceTarget = (): Promise<any> => this.req.request("price-target");

  /** Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices. */
  public ohlc = (): Promise<any> => this.req.request("ohlc");

  /** 
    This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date. */
  public sentiment = (): Promise<any> => this.req.request(`sentiment`);

  public quote = (): Promise<any> => this.req.request(`quote`);

  /** Pulls data from the last four months. */
  public recommendationTrends = (): Promise<any> =>
    this.req.request("recommendation-trends");

  public stats = (): Promise<any> => this.req.request(`stats`);

  public upcomingEvents = (): Promise<any> =>
    this.req.request("upcoming-events");

  public upcomingEarnings = (): Promise<any> =>
    this.req.request("upcoming-earnings");

  public upcomingDividends = (): Promise<any> =>
    this.req.request("upcoming-dividends");

  public upcomingSplits = (): Promise<any> =>
    this.req.request("upcoming-splits");

  public upcomingIPOs = (): Promise<any> => this.req.request("upcoming-ipos");

  public splits = (): Promise<any> => this.req.request(`splits`);

  public shortInterest = (): Promise<any> => this.req.request(`short-interest`);

  /** This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage. */
  public volumeByVenue = (): Promise<any> =>
    this.req.request("volume-by-venue");
}

export default Stocks;
