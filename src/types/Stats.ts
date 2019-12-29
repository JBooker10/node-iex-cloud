export default interface Stats {
    /** Company name of the security  */
    companyName: string;
    /** Market cap of the security calculated as shares outstanding * previous day close.  */
    marketcap: number;
    week52high: number;
    week52low: number;
    /** Percentage change  */
    week52change: number;
    /** Number of shares outstanding as the difference between issued shares and treasury shares. Investopedia */
    sharesOutstanding: number;
    /** Returns the annual shares outstanding minus closely held shares. */
    float: number;
    /** Average 10 day volume  */
    avg10Volume: number;
    /**  Average 30 day volume */
    avg30Volume: number;
    day200MovingAvg: number;
    day50MovingAvg: number;
    employees: number;
    /** Trailing twelve month earnings per share. Investopedia */
    ttmEPS: number;
    /** Trailing twelve month dividend rate per share */
    ttmDividendRate: number;
    /** The ratio of trailing twelve month dividend compared to the previous day close price. The dividend yield is represented as a percentage calculated as (ttmDividendRate) / (previous day close price) Investopedia */
    dividendYield: number;
    /** Expected ex date of the next dividend */
    nextDividendDate: Date;
    /**  	Ex date of the last dividend */
    exDividendDate: Date;
    /** Expected next earnings report date */
    nextEarningsDate: Date;
    peRatio: number;
    /** Beta is a measure used in fundamental analysis to determine the volatility of an asset or portfolio in relation to the overall market. Levered beta calculated with 1 year historical data and compared to SPY. */
    beta: number;
    maxChangePercent: number;
    year5ChangePercent: number;
    year2ChangePercent: number;
    year1ChangePercent: number;
    ytdChangePercent: number;
    month6ChangePercent: number;
    month3ChangePercent: number;
    month1ChangePercent: number;
    day30ChangePercent: number;
    day5ChangePercent: number;
  }

export interface HistoricalStats {
  averageDailyVolume: number;
  averageDailyRoutedVolume: number;
  averageMarketShare: number;
  averageOrderSize: number;
  averageFillSize: number;
  bin100Percent: number;
  bin101Percent: number;
  bin200Percent: number;
  bin300Percent: number;
  bin400Percent: number;
  bin500Percent: number;
  bin1000Percent: number;
  bin5000Percent: number;
  bin10000Percent: number;
  bin10000Trades: number;
  bin20000Trades: number;
  bin50000Trades: number;
  uniqueSymbolsTraded: number;
  blockPercent: number;
  selfCrossPercent: number;
  etfPercent: number;
  largeCapPercent: number;
  midCapPercent: number;
  smallCapPercent: number;
  venueARCXFirstWaveWeight: number;
  venueBATSFirstWaveWeight: number;
  venueBATYFirstWaveWeight: number;
  venueEDGAFirstWaveWeight: number;
  venueEDGXFirstWaveWeight: number;
  venueOverallFirstWaveWeight: number;
  venueXASEFirstWaveWeight: number;
  venueXBOSFirstWaveWeight: number;
  venueXCHIFirstWaveWeight: number;
  venueXCISFirstWaveWeight: number;
  venueXNGSFirstWaveWeight: number;
  venueXNYSFirstWaveWeight: number;
  venueXPHLFirstWaveWeight: number;
  venueARCXFirstWaveRate: number;
  venueBATSFirstWaveRate: number;
  venueBATYFirstWaveRate: number;
  venueEDGAFirstWaveRate: number;
  venueEDGXFirstWaveRate: number;
  venueOverallFirstWaveRate: number;
  venueXASEFirstWaveRate: number;
  venueXBOSFirstWaveRate: number;
  venueXCHIFirstWaveRate: number;
  venueXCISFirstWaveRate: number;
  venueXNGSFirstWaveRate: number;
  venueXNYSFirstWaveRate: number;
  venueXPHLFirstWaveRate: number;
}

export type StatType = "historical" | "intraday" | "recent" | "records";