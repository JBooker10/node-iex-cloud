import IEXRequest from "./request";
import { Range, Last } from "./types";

class Batch {
  private batching: string[];
  constructor(private req: IEXRequest) {
    this.req = req;
    this.batching = [];
  }

  /** returns balance sheet data. Available quarterly or annually with the default being the last available quarter
   * `Data Weight: 3000`
   */
  public balanceSheet = (): Batch => {
    this.batching = [...this.batching, `balance-sheet`];
    return this;
  };

  /**
   * returns book value for a given stock
   * `Data Weight: 1 per quote returned`
   */
  public book = (): Batch => {
    this.batching = [...this.batching, `book`];
    return this;
  };

  /**
   * returns cash flow data. Available quarterly or annually, with the default being the last available quarter.
   * `Data Weight: 1,000 per symbol per period`
   */
  public cashFlow = (): Batch => {
    this.batching = [...this.batching, `cash-flow`];
    return this;
  };

  /**
   * Returns adjusted and unadjusted historical data for up to 15 years.
   * `Data Weight: 1,000 per symbol per period`
   */
  public chart = (): Batch => {
    this.batching = [...this.batching, `chart`];
    return this;
  };

  public ceoCompensation = (): Batch => {
    this.batching = [...this.batching, `ceo-compensation`];
    return this;
  };

  /** returns data on a given company
   *  `Data Weight: 1 per symbol` */
  public company = (): Batch => {
    this.batching = [...this.batching, `company`];
    return this;
  };

  public delayedQuote = (): Batch => {
    this.batching = [...this.batching, `delayed-quote`];
    return this;
  };

  public dividends = (): Batch => {
    this.batching = [...this.batching, `dividends`];
    return this;
  };

  /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
   */
  public earnings = (): Batch => {
    this.batching = [...this.batching, `earnings`];
    return this;
  };

  /** Provides the latest consensus estimate for the next fiscal period */
  public estimates = (): Batch => {
    this.batching = [...this.batching, `estimates`];
    return this;
  };

  /** Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter. */
  public financials = (): Batch => {
    this.batching = [...this.batching, `financials`];
    return this;
  };

  /** Returns latest news for a give stock symbol */
  public news = (): Batch => {
    this.batching = [...this.batching, `news`];
    return this;
  };

  /**
   * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
   */
  public fundOwnership = (): Batch => {
    this.batching = [...this.batching, `fund-ownership`];
    return this;
  };

  /** Pulls income statement data. Available quarterly or annually with the default being the last available quarter. */
  public income = (): Batch => {
    this.batching = [...this.batching, `income`];
    return this;
  };

  /** Returns the top 10 insiders, with the most recent information. */
  public insiderRoster = (): Batch => {
    this.batching = [...this.batching, `inside-roster`];
    return this;
  };

  /** Returns aggregated insiders summary data for the last 6 months. */
  public insiderSummary = (): Batch => {
    this.batching = [...this.batching, `inside-summary`];
    return this;
  };

  public insiderTransactions = (): Batch => {
    this.batching = [...this.batching, `inside-transactions`];
    return this;
  };

  /** 
  Returns the top 10 institutional holders, defined as buy-side or sell-side firms. */
  public institutionalOwnership = (): Batch => {
    this.batching = [...this.batching, `institutionalOwnership`];
    return this;
  };

  /** This is a helper function, but the google APIs url is standardized.  */
  public logo = (): Batch => {
    this.batching = [...this.batching, `logo`];
    return this;
  };

  /** This endpoint will return aggregated intraday prices in one minute buckets */
  public intradayPrices = (): Batch => {
    this.batching = [...this.batching, `intraday-prices`];
    return this;
  };

  /**  This returns 15 minute delayed, last sale eligible trades. */
  public largestTrades = (): Batch => {
    this.batching = [...this.batching, `largest-trades`];
    return this;
  };

  /** Returns end of day options data */
  public options = (): Batch => {
    this.batching = [...this.batching, `options`];
    return this;
  };

  /** Returns peer group */
  public peers = (): Batch => {
    this.batching = [...this.batching, `peers`];
    return this;
  };

  /** Returns previous day adjusted price data for one or more stocks. */
  public previous = (): Batch => {
    this.batching = [...this.batching, `previous`];
    return this;
  };

  /** Returns price of a stock */
  public price = (): Batch => {
    this.batching = [...this.batching, `price`];
    return this;
  };

  /** Provides the latest avg, high, and low analyst price target for a symbol. */
  public priceTarget = (): Batch => {
    this.batching = [...this.batching, `price-target`];
    return this;
  };

  /** Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices. */
  public ohlc = (): Batch => {
    this.batching = [...this.batching, `ohlc`];
    return this;
  };

  /** This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date. */
  public sentiment = (): Batch => {
    this.batching = [...this.batching, `sentiment`];
    return this;
  };

  public quote = (): Batch => {
    this.batching = [...this.batching, `quote`];
    return this;
  };

  /** Pulls data from the last four months. */
  public recommendationTrends = (): Batch => {
    this.batching = [...this.batching, `recommendation-trends`];
    return this;
  };

  public stats = (): Batch => {
    this.batching = [...this.batching, `stats`];
    return this;
  };

  public splits = (): Batch => {
    this.batching = [...this.batching, `splits`];
    return this;
  };

  /** This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage. */
  public volumeByVenue = (): Batch => {
    this.batching = [...this.batching, `volume-by-venue`];
    return this;
  };

  /** return batch requests using the range method */
  public range = (range?: Range, last?: Last): Promise<any> => {
    return this.req.response(
      this.req.batchParams,
      this.batching,
      `&range=${range ? range : "1m"}&last=${last ? last : 0}`
    );
  };
}

export default Batch;
