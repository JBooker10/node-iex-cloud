
export default interface BalanceSheet {
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