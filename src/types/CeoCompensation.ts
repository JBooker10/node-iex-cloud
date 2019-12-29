export default interface CeoCompensation {
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