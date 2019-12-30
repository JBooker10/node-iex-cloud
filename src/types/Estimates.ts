export default interface Estimates {
  symbol: string;
  estimates: [
    {
      /** Consensus EPS estimate trend for the period. EPS data is split-adjusted by default. Earnings data accounts for all corporate actions including dilutions, splits, reverse splits, spin-offs, exceptional dividends, and rights issues. Investopedia */
      consensusEPS: number;
      /** Number of estimates for the period */
      numberOfEstimates: number;
      /** The fiscal quarter the earnings data applies to Q# YYYY */
      fiscalPeriod: string;
      /** Date representing the company fiscal quarter end YYYY-MM-DD */
      fiscalEndDate: Date;
      /** Expected report date of next earnings */
      reportDate: Date;
    }
  ];
}
