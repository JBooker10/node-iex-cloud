/**
     - Sandbox: set to true for devlopment data
     - Version. Example: beta
     - Publishable. All REST requests require a valid token and can be added to a url like ?token=YOUR_TOKEN_HERE

 */
export interface Configuration {
  publishable: string;
  test: string;
  sandbox?: boolean;
  version?: Version;
}

export type Version = "beta" | "stable" | "v1" | string;
export type Period = "annual" | "quarterly";
export type Last = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type OptionSide = "put" | "call";
export type StatType = "historical" | "intraday" | "recent" | "records";
export type Range =
  | "max"
  | "5y"
  | "2y"
  | "1y"
  | "ytd"
  | "6m"
  | "3m"
  | "1m"
  | "1mm"
  | "5d"
  | "5dm"
  | "date"
  | "dynamic"
  | string;

export interface ChartParams {
  date?: string;
  chartByDay?: boolean;
  /**  boolean. Will return adjusted data only with keys date, close, and volume. */
  chartCloseOnly?: boolean;
  /** boolean. If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts. */
  chartSimplify?: boolean;
  /**  number. If passed, chart data will return every Nth element as defined by chartInterval */
  chartInterval?: number;
  /** boolean. If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value. */
  changeFromClose?: boolean;
  /** If passed, chart data will return the last N elements from the time period defined by the range parameter */
  chartLast?: number;
  /** 
    Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. */
  exactDate?: string;
  range: string;
}

export interface Book {
  quote: Quote;
  bids: any[];
  asks: any[];
  trades: Trades[];
  systemEvents: {
    systemEvent: string;
    timestamp: number;
  };
}

export interface Trades {
  price: number;
  size: number;
  tradeId: number;
  isISO: boolean;
  isOddLot: boolean;
  isOutsideRegularHours: boolean;
  isSinglePriceCross: boolean;
  isTradeThroughExempt: boolean;
  timestamp: number;
}

export interface BalanceSheet {
  symbol: string;
  balanceSheet: [
    {
      reportDate: Date;
      currentCash: number;
      shortTermInvestments: number;
      receivables: number;
      inventory: number;
      otherCurrentAssets: number;
      currentAssets: number;
      longTermInvestments: number;
      propertyPlantEquipment: number;
      goodwill: null | number;
      intangibleAssets: null | number;
      otherAssets: number;
      totalAssets: number;
      accountsPayable: number;
      currentLongTermDebt: number;
      otherCurrentLiabilities: number;
      totalCurrentLiabilities: number;
      longTermDebt: number;
      otherLiabilities: number;
      minorityInterest: number;
      totalLiabilities: number;
      commonStock: number;
      retainedEarnings: number;
      treasuryStock: null | number;
      capitalSurplus: null | number;
      shareholderEquity: number;
      netTangibleAssets: number;
    }
  ];
}

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
  tags: string[];
}

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

export interface Dividends {
  /**   refers to the dividend ex-date */
  exDate: Date;
  /**   refers to the payment date */
  paymentDate: Date;
  /**   refers to the dividend record date */
  recordDate: Date;
  /**   refers to the dividend declaration date */
  declaredDate: Date;
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

export interface Earnings {
  symbol: string;
  earnings: [
    {
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
      fiscalEndDate: Date;
      /** Represents the EPS of the quarter a year ago */
      yearAgo: number;
      /** Represents the percent difference between the quarter a year ago actualEPS and current period actualEPS. */
      yearAgoChangePercent: number;
    }
  ];
}

export interface CashFlow {
  symbol: string;
  cashflow: [
    {
      reportDate: Date;
      netIncome: number;
      depreciation: number;
      changesInReceivables: number;
      changesInInventories: number;
      cashChange: number;
      cashFlow: number;
      capitalExpenditures: number;
      investments: number;
      investingActivityOther: null | number;
      totalInvestingCashFlows: number;
      dividendsPaid: null | number;
      netBorrowing: number;
      otherFinancingCashFlows: null | number;
      cashFlowFinancing: number;
      exchangeRateEffect: null | number;
    }
  ];
}

export interface Estimates {
  symbol: string;
  estimates: [
    {
      consensusEPS: number;
      numberOfEstimates: number;
      fiscalPeriod: string;
      fiscalEndDate: Date;
      reportDate: Date;
    }
  ];
}

export interface Financials {
  symbol: string;
  financials: [
    {
      reportDate: Date;
      grossProfit: number;
      costOfRevenue: number;
      operatingRevenue: number;
      totalRevenue: number;
      operatingIncome: number;
      netIncome: number;
      researchAndDevelopment: number;
      operatingExpense: number;
      currentAssets: number;
      totalAssets: number;
      totalLiabilities: number;
      currentCash: number;
      currentDebt: number;
      shortTermDebt: number;
      longTermDebt: number;
      totalCash: number;
      totalDebt: number;
      shareholderEquity: number;
      cashChange: number;
      cashFlow: number;
      operatingGainsLosses: string;
    }
  ];
}

export interface FundOwnership {
  /** Share amount held by the fund as of the report date, adjusted for corporate actions */
  adjHolding: number;
  /** Total share amount multiplied by the latest month-end share price, adjusted for corporate actions in USD */
  adjMv: number;
  /** Name of the entity */
  entityProperName: string;
  /** refers to the update time of report_date in milliseconds since midnight Jan 1, 1970. */
  reportDate: number;
  /** Share amount held by the fund as reported in the source */
  reportedHolding: number;
  /** Market value held by the fund as reported in the source, represented in USD. */
  reportedMv: number;
}

export interface Chart {
  /** Formatted as YYYY-MM-DD */
  date: Date;
  /** Adjusted data for historical dates. Split adjusted only. */
  open: number;
  /**  Adjusted data for historical dates. Split adjusted only. */
  high?: number;
  /** Adjusted data for historical dates. Split adjusted only. */
  low?: number;
  /** Adjusted data for historical dates. Split adjusted only. */
  close?: number;
  /** Unadjusted data for historical dates.  */
  volume?: number;
  /** Unadjusted data for historical dates. */
  uOpen?: number;
  /** Unadjusted data for historical dates. */
  uHigh?: number;
  /** Unadjusted data for historical dates. */
  uLow?: number;
  /** Unadjusted data for historical dates. */
  uClose?: number;
  /** Unadjusted data for historical dates. */
  uVolume?: number;
  /**  Change from previous trading day. */
  change?: number;
  /**  Change percent from previous trading day. */
  changePercent?: number;
  /** A human readable format of the date depending on the range. */
  label?: string;
  /** Percent change of each interval relative to first value. Useful for comparing multiple stocks.  */
  changeOverTime?: number;
}

export interface DynamicChart {
  range: string;
  data: Chart[];
}

export interface Income {
  symbol: string;
  income: [
    {
      /** The last day of the relevant fiscal period. */
      reportDate: Date;
      /** Refers to the sum of both operating and non-operating revenues . Investopedia */
      totalRevenue: number;
      /** Represents the cost of goods sold for the period including depletion and amortization. Investopedia */
      costOfRevenue: number;
      /** Represents the difference between sales or revenues and cost of goods sold and depreciation. Investopedia  */
      grossProfit: number;
      /** Represents all direct and indirect costs related to the creation and development of new processes, techniques, applications and products with commercial possibilities. Excludes customer or government sponsored research, purchase of mineral rights (for oil, gas, coal, drilling and mining companies), engineering expense, and contributions by government, customers, partnerships or other corporations to the company’s research and development expense */
      researchAndDevelopment: number;
      /** Represents expenses not directly attributable to the production process but relating to selling, general and administrative functions. Excludes research and development. */
      sellingGeneralAndAdmin: number;
      /** Calculated as cost of revenue minus selling, general & administrative expense. Investopedia */
      operatingExpense: number;
      /** Represents operating income for the period calculated as (net sales or revenue) - (cost of goods sold) - (selling, general & administrative expenses) - (other operating expenses). This will only return for industrial companies. */
      operatingIncome: number;
      /** Calculated as income before tax minus operating income.  */
      otherIncomeExpenseNet: number;
      /** Represents operating income for the period calculated as (net sales or revenue) - (cost of goods sold) - (selling, general & administrative expenses) - (other operating expenses). This will only return for industrial companies. Investopedia */
      ebit: number;
      /** Represents interest expense, net of interest capitalized for the period calculated as (interest expense on debt) - (interest capitalized) Investopedia  */
      interestIncome: number;
      /** Represents all income/loss before any federal, state or local taxes. Extraordinary items reported net of taxes are excluded.  */
      pretaxIncome: number;
      /** Represents all income taxes levied on the income of a company by federal, state and foreign governments. Excludes domestic international sales corporation taxes, ad valorem taxes, excise taxes, windfall profit taxes, taxes other than income, and general and services taxes. */
      incomeTax: number;
      /** Represents the portion of earnings/losses of a subsidiary pertaining to common stock not owned by the controlling company or other members of the consolidated group.  */
      minorityInterest: number;
      /** Represents income before extraordinary items and preferred and common dividends, but after operating and non-operating income and expenses, minority interest and equity in earnings. Investopedia */
      netIncome: number;
      /** Represents net income available to common basic EPS before extraordinaries for the period calculated as (net income after preferred dividends) - (discontinued operations)  */
      netIncomeBasic: number;
    }
  ];
}

export interface InsiderRoster {
  /** Name of the entity */
  entityName: string;
  /** refers to the update time of report_date in milliseconds since midnight Jan 1, 1970. */
  position: number;
  /** Number of shares held, adjusted for corporate actions  */
  reportDate: Date;
}

export interface InsiderSummary {
  /**  	Full name of the individual. This field concatenates the individuals First Name, Middle Name, Last Name and Suffix. */
  fullName: string;
  /**  As-reported (unadjusted) number of shares acquired or disposed */
  netTransacted: number;
  /**  	Insiders job title per the sourced filing */
  reportedTitle: string;
  /** Total shares purchased */
  totalBought: number;
  /** Total shares sold */
  totalSold: number;
}

export interface InsiderTransactions {
  /**  	Effective date of the transaction. */
  effectiveDate: number;
  /** Full name of the individual. This field concatenates the individuals First Name, Middle Name, Last Name and Suffix.  */
  fullName: string;
  /** Insiders job title per the sourced filing  */
  reportedTitle: string;
  /** As-reported (unadjusted) unit price at which shares were acquired or disposed, represented in USD. */
  tranPrice: number;
  /**  	As-reported (unadjusted) number of shares acquired or disposedValue of the transaction, calculated as Tran_Shares * Tran_Price, represented in USD. This value is not adjusted for corporate actions.  */
  tranShares: number;
  /** Value of the transaction, calculated as Tran_Shares * Tran_Price, represented in USD. This value is not adjusted for corporate actions. */
  tranValue: number;
}

export interface InstitutionalOwnership {
  /** Share amount held by the fund as of the report date, adjusted for corporate actions */
  adjHolding: number;
  /** Total share amount multiplied by the latest month-end share price, adjusted for corporate actions in USD  */
  adjMv: number;
  /**  Name of the entity */
  entityProperName: string;
  /** refers to the update time of report_date in milliseconds since midnight Jan 1, 1970. */
  reportDate: number;
  /** Share amount held by the institution as reported in the source */
  reportedHolding: number;
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

export interface Stats {
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

export interface Logo {
  url: string;
}

export interface News {
  /** Millisecond epoch of time of article */
  datetime: Date;
  headline: string;
  /** Source of the news article. Make sure to always attribute the source. */
  source: string;
  /** URL to IEX Cloud for associated news image. Note: You will need to append your token before calling. */
  url: string;
  summary: string;
  /**  	Comma-delimited list of tickers associated with this news article. Not all tickers are available on the API. Make sure to check against available ref-data */
  related: string;
  /** URL to IEX Cloud for associated news image. Note: You will need to append your token before calling. */
  image: string;
  /** Language of the source article  */
  lang: string;
  /** Whether the news source has a paywall */
  hasPaywall: boolean;
}

export interface OHLC {
  /**  	refers to the official open */
  open: {
    /** refers to the official open price. Will return 0 if symbol has no volume for the day. */
    price: number;
    /** refers to the official listing exchange time for the open in millisecond epoch  */
    time: number;
  };
  /** refers to the official close */
  close: {
    /** refers to the official close price. Will return 0 if symbol has no volume for the day. */
    price: number;
    /** refers to the official listing exchange time for the close in millisecond epoch */
    time: number;
  };
  /** refers to the market-wide highest price from the SIP (15 minute delayed) */
  high: number;
  /** refers to the market-wide lowest price from the SIP (15 minute delayed)  */
  low: number;
}

export interface PriceTarget {
  symbol: number;
  /** Date of the most recent price target */
  updatedDate: string;
  /** Average price target */
  priceTargetAverage: number;
  /**  	Highest price target */
  priceTargetHigh: number;
  /** Lowest price target */
  priceTargetLow: number;
  /** Number of analysts that provided price targets */
  numberOfAnalysts: number;
}

export interface LargestTrades {
  price: number;
  size: number;
  time: number;
  timelabel: number;
  venue: number;
  venueName: string;
}

export interface Volume {
  mic: string;
  tapeId: string;
  venueName: string;
  volume: number;
  tapeA: number;
  tapeB: number;
  tapeC: number;
  marketPercent: number;
  lastUpdated: number;
}

export interface Quote {
  latestPrice: number;
  latestVolume: number;
  latestUpdate: number;
  latestTime: string;
  calculationPrice: string;
  latestSource: string;
  change: number;
  changePercent: number;
  open: number;
  openTime: number;
  close: number;
  closeTime: number;
  high: number;
  low: number;
  extendedPrice: number;
  extendedChange: number;
  extendedChangePercent: number;
  extendedPriceTime: number;
  delayedPrice: number;
  delayedPriceTime: number;
  marketCap: number;
  avgTotalVolume: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
  iexRealtimePrice: number;
  iexRealtimeSize: number;
  iexLastUpdated: number;
  iexMarketPercent: number;
  iexVolume: number;
  iexBidPrice: number;
  iexBidSize: number;
  iexAskPrice: number;
  iexAskSize: number;
  symbol: string;
  companyName: string;
}

export interface RecommendationTrends {
  consensusEndDate: number;
  consensusStartDate: number;
  corporateActionsAppliedDate: number;
  ratingBuy: number;
  ratingHold: number;
  ratingNone: number;
  ratingOverweight: number;
  ratingScaleMark: number;
  ratingSell: number;
  ratingUnderweight: number;
}

export interface Splits {
  /** refers to the split ex-date */
  exDate: string;
  /** refers to the split declaration date */
  declaredDate: string;
  /** refers to the split ratio. The split ratio is an inverse of the number of shares that a holder of the stock would have after the split divided by the number of shares that the holder had before.  */
  ratio: number;
  /**   	To factor of the split. Used to calculate the split ratio fromfactor/tofactor = ratio (eg ½ = 0.5) */
  toFactor: string;
  /**  	To factor of the split. Used to calculate the split ratio fromfactor/tofactor = ratio (eg ½ = 0.5) */
  fromFactor: string;
  /** Description of the split event. */
  description: string;
}

export interface ShortInterest {
  SettlementDate: Date;
  SecurityName: string;
  CurrentShortInterest: number;
  PreviousShortInterest: number;
  PercentChange: number;
  AverageDailyVolume: number;
  DaystoCover: number;
  StockAdjustmentFlag: string;
  RevisionFlag: string;
  SymbolinINETSymbology: string;
  SymbolinCQSSymbology: string;
  SymbolinCMSSymbology: string;
  NewIssueFlag: string;
  CompanyName: string;
}

export interface DailySentiment {
  sentiment: number;
  totalScores: number;
  positive: number;
  negative: number;
}

export interface MinuteSentiment extends DailySentiment {
  minute: number;
}

export interface VolumeByVenue {
  volume: number;
  venue: string;
  venueName: string;
  date: string;
  marketPercent: number;
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

export interface IntraDay {
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

export interface Recent {
  date: Date;
  volume: number;
  routedVolume: number;
  marketShare: number;
  isHalfday: boolean;
  litVolume: number;
}

export interface Records {
  volume: {
    recordValue: number;
    recordDate: Date;
    previousDayValue: number;
    avg30Value: number;
  };
  symbolsTraded: {
    recordValue: number;
    recordDate: Date;
    previousDayValue: number;
    avg30Value: number;
  };
  routedVolume: {
    recordValue: number;
    recordDate: Date;
    previousDayValue: number;
    avg30Value: number;
  };
  notional: {
    recordValue: number;
    recordDate: Date;
    previousDayValue: number;
    avg30Value: number;
  };
}

export interface CryptoQuote {
  symbol: string;
  primaryExchange: string;
  sector: string;
  calculationPrice: string;
  high: string;
  low: string;
  latestPrice: string;
  latestSource: string;
  latestUpdate: number;
  latestVolume: string;
  previousClose: string;
}

export interface Search {
  symbol: string;
  securityName: string;
  securityType: string;
  region: string;
  exchange: string;
}
