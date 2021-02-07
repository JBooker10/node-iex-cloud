export interface CeoCompensation {
      symbol?: string;
      /**	CEO name */
      name?: string;
      /** Name of the company */
      companyName?: string;
      /** Location of the company */
      location?: string;
      /** Salary of the company CEO */
      salary?: number;
      /** Bonus amount of the company CEO */
      bonus?: number;
      stockAwards?: number;
      optionAwards?: number;
      nonEquityIncentives?: number;
      pensionAndDeferred?: number;
      otherComp?: number;
      /** Total compensation of the company CEO */
      total?: number;
      /** Fiscal year for the compensation data */
      year?: string;
}

export interface BatchCeoCompensation {
  [key: string]: {
    ["ceo-compensation"]: CeoCompensation
  };
}
