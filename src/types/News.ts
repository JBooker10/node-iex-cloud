export interface News {
    /** Millisecond epoch of time of article */
    datetime?: Date;
    headline?: string;
    /** Source of the news article. Make sure to always attribute the source. */
    source?: string;
    /** URL to IEX Cloud for associated news image. Note?: You will need to append your token before calling. */
    url?: string;
    summary?: string;
    /**  	Comma-delimited list of tickers associated with this news article. Not all tickers are available on the API. Make sure to check against available ref-data */
    related?: string;
    /** URL to IEX Cloud for associated news image. Note?: You will need to append your token before calling. */
    image?: string;
    /** Language of the source article  */
    lang?: string;
    /** Whether the news source has a paywall */
    hasPaywall?: boolean;
  }