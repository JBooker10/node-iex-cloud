export interface ShortInterest {
    SettlementDate?: Date;
    SecurityName?: string;
    CurrentShortInterest?: number;
    PreviousShortInterest?: number;
    PercentChange?: number;
    AverageDailyVolume?: number;
    DaystoCover?: number;
    StockAdjustmentFlag?: string;
    RevisionFlag?: string;
    SymbolinINETSymbology?: string;
    SymbolinCQSSymbology?: string;
    SymbolinCMSSymbology?: string;
    NewIssueFlag?: string;
    CompanyName?: string;
  }