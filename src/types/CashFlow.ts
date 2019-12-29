export default interface CashFlow {
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