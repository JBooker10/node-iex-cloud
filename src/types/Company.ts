export default interface Company {
      symbol: string;
      /** Name of the company */
      companyName: string;
      exchange: string;
      industry: string;
      website: string;
      description: string;
      CEO: string;
      /** Primary SIC Code for the symbol (if available) */
      primarySicCode: string;
      securityName: string;
      /** refers to the common issue type of the stock.
    ad – American Depository Receipt (ADR’s)
    re – Real Estate Investment Trust (REIT’s)
    ce – Closed end fund (Stock and Bond Fund)
    si – Secondary Issue
    lp – Limited Partnerships
    cs – Common Stock
    et – Exchange Traded Fund (ETF)
    wt – Warrant
    rt – Right
    (blank) – Not Available, i.e., Note, or (non-filing) Closed Ended Funds
    ut - Unit
    temp - Temporary */
      issueType: string;
      sector: string;
      /** Number of employees */
      employees: number;
      /** an array of strings used to classify the company. */
      tags: string[];
      /** street address of the company if available */
      address?: string;
      /** street address of the company if available */
      address2?: string;
      /** state of the company if available */
      state?: string;
      /** city of the company if available */
      city?: string;
      /** zip of the company if available */
      zip?: string;
      /** country of the company if available */
      country?: string;
      /** phone number of the company if available */
      phone?: string;
}

export interface Logo {
  url: string;
}

export interface BatchCompany {
  [key: string]: {
    company: Company,
  }
}