/** @see https://iexcloud.io/docs/api/#company */
export interface Company {
  symbol: string;
  companyName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  CEO: string;
  securityName: string;
  issueType: string;
  sector: string;
  employees: number;
  tags: [];
}

/** @see https://iexcloud.io/docs/api/#ceo-compensation */
export interface CeoCompensation {
  symbol: string;
  name: string;
  companyName: string;
  location: string;
  salary: number;
  bonus: number;
  stockAwards: number;
  optionAwards: number;
  nonEquityIncentives: number;
  pensionAndDeferred: number;
  otherComp: number;
  total: number;
  year: string;
}

/** @see https://iexcloud.io/docs/api/#delayed-quote */
export interface DelayedQuote {
  symbol: string;
  delayedPrice: number;
  high: number;
  low: number;
  delayedSize: number;
  delayedPriceTime: number;
  totalVolume: number;
  processedTime: number;
}

/** @see https://iexcloud.io/docs/api/#dividends */
export interface Dividends {
  /**   refers to the dividend ex-date */
  exDate: string;
  /**   refers to the payment date */
  paymentDate: string;
  /**   refers to the dividend record date */
  recordDate: string;
  /**   refers to the dividend declaration date */
  declaredDate: string;
  /**	refers to the payment amount */
  amount: number;
  /** 	Type of dividend event */
  flag: string;
  /**   Currency of the dividend */
  currency: string;
  /**   Description of the dividend event */
  description: string;
  /**   Frequency of the dividend */
  frequency: string;
}
/** @see https://iexcloud.io/docs/api/#earnings */
export interface Earnings {
  /** Actual earnings per share for the period. EPS data is split-adjusted by default. Earnings data accounts for all corporate actions including dilutions, splits, reverse splits, spin-offs, exceptional dividends, and rights issues. */
  actualEPS: number;
  /** Consensus EPS estimate trend for the period */
  consensusEPS: number;
  /** Time of earnings announcement. BTO (Before open), DMT (During trading), AMC (After close) */
  announceTime: string;
  /** Number of estimates for the period */
  numberOfEstimates: number;
  /** Dollar amount of EPS surprise for the period */
  EPSSurpriseDollar: number;
  /** Expected earnings report date YYYY-MM-DD */
  EPSReportDate: string;
  /** The fiscal quarter the earnings data applies to Q# YYYY */
  fiscalPeriod: string;
  /** Date representing the company fiscal quarter end YYYY-MM-DD */
  fiscalEndDate: string;
  /** Represents the EPS of the quarter a year ago */
  yearAgo: number;
  /** Represents the percent difference between the quarter a year ago actualEPS and current period actualEPS. */
  yearAgoChangePercent: number;
}
