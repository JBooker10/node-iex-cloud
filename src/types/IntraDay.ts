export default interface IntraDay {
    volume: {
      value: number;
      lastUpdated: number;
    };
    symbolsTraded: {
      value: number;
      lastUpdated: number;
    };
    routedVolume: {
      value: number;
      lastUpdated: number;
    };
    notional: {
      value: number;
      lastUpdated: number;
    };
    marketShare: {
      value: number;
      lastUpdated: number;
    };
  }
  
  export interface IntradayPrices {
    date: Date;
    /** Formatted as HHmm */
    minute: string;
    /** A human readable format of the date depending on the range. */
    label: string;
    /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marktOpen: number;
    /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketClose: number;
    /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marktHigh: number;
    /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketLow: number;
    /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketAverage: number;
    /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketVolume: number;
    /** 15 minute delayed data. Total notional value during the minute for trades across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketNotional: number;
    /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute.  */
    marketNumberOfTrades: number;
    /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketChangeOverTime: number;
    high: number;
    low: number;
    /**  IEX only data. First price during the minute on IEX.*/
    open: number;
    /** IEX only data. Last price during the minute on IEX.*/
    close: number;
    /** IEX only data. Average price during the minute for trades on IEX.  */
    average: number;
    /**  IEX only data. Total volume during the minute on IEX. */
    volume: number;
    /** IEX only data. Total notional value during the minute for trades on IEX. */
    notional: number;
    /** IEX only data. Number of trades during the minute on IEX. */
    numberOfTrades: number;
    /** Percent change of each interval relative to first value. Useful for comparing multiple stocks. */
    changeOverTime: number;
  }