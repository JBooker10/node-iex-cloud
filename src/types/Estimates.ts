export default interface Estimates {
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