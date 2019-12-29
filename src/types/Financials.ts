export default interface Financials {
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