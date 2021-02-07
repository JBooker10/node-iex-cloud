export interface Earnings {
    symbol: string;
    earnings: [
      {
        /** Actual earnings per share for the period. EPS data is split-adjusted by default. Earnings data accounts for all corporate actions including dilutions, splits, reverse splits, spin-offs, exceptional dividends, and rights issues. */
        actualEPS?: number;
        /** Consensus EPS estimate trend for the period */
        consensusEPS?: number;
        /** Time of earnings announcement. BTO (Before open), DMT (During trading), AMC (After close) */
        announceTime?: string;
        /** Number of estimates for the period */
        numberOfEstimates?: number;
        /** Dollar amount of EPS surprise for the period */
        EPSSurpriseDollar?: number;
        /** Expected earnings report date YYYY-MM-DD */
        EPSReportDate?: string;
        /** The fiscal quarter the earnings data applies to Q# YYYY */
        fiscalPeriod?: string;
        /** Date representing the company fiscal quarter end YYYY-MM-DD */
        fiscalEndDate?: Date;
        /** Represents the EPS of the quarter a year ago */
        yearAgo?: number;
        /** Represents the percent difference between the quarter a year ago actualEPS and current period actualEPS. */
        yearAgoChangePercent?: number;
      }
    ];
  }