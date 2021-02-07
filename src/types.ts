export * from "./types/BalanceSheet";
export * from "./types/Book";
export * from "./types/CashFlow";
export * from "./types/CeoCompensation";
export * from "./types/Chart";
export * from "./types/Company";
export * from "./types/Dividends";
export * from "./types/Earnings";
export * from "./types/Estimates";
export * from "./types/Financials";
export * from "./types/FundOwnership";
export * from "./types/Forex";
export * from "./types/Income";
export * from "./types/Insider";
export * from "./types/InstitutionalOwnership";
export * from "./types/IntraDay";
export * from "./types/News";
export * from "./types/OHLC";
export * from "./types/PriceTarget";
export * from "./types/Quote";
export * from "./types/Recent";
export * from "./types/Records";
export * from "./types/Search";
export * from "./types/Sentiment";
export * from "./types/ShortInterest";
export * from "./types/Splits";
export * from "./types/Stats";
export * from "./types/Trades";
export * from "./types/TimeSeries";
export * from "./types/RecommendationTrends";
export * from "./types/Volume";
/**
     - Sandbox: set to true for devlopment data
     - Version. Example: beta
     - Publishable. All REST requests require a valid token and can be added to a url like ?token=YOUR_TOKEN_HERE

 */
export interface Configuration {
  publishable: string;
  test?: string;
  sandbox?: boolean;
  version?: Version;
}

export type Version = "beta" | "stable" | "v1" | string;
export type Period = "annual" | "quarterly";
export type Last = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type OptionSide = "put" | "call";
export type CryptoCurrency = "btcusd" | "ethusd" | "ltcusd" | "bchusd" | string;
export type MarketType =
  | "mostactive"
  | "gainers"
  | "losers"
  | "iexvolume"
  | "iexpercent"
  | string;
