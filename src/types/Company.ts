export default interface Company {
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

export interface Logo {
  url: string;
}
