export interface InsiderRoster {
    /** Name of the entity */
    entityName?: string;
    /** refers to the update time of report_date in milliseconds since midnight Jan 1, 1970. */
    position?: number;
    /** Number of shares held, adjusted for corporate actions  */
    reportDate?: Date;
  }

export interface InsiderSummary {
    /**  	Full name of the individual. This field concatenates the individuals First Name, Middle Name, Last Name and Suffix. */
    fullName?: string;
    /**  As-reported (unadjusted) number of shares acquired or disposed */
    netTransacted?: number;
    /**  	Insiders job title per the sourced filing */
    reportedTitle?: string;
    /** Total shares purchased */
    totalBought?: number;
    /** Total shares sold */
    totalSold?: number;
  }


export interface InsiderTransactions {
    /**  	Effective date of the transaction. */
    effectiveDate?: number;
    /** Full name of the individual. This field concatenates the individuals First Name, Middle Name, Last Name and Suffix.  */
    fullName?: string;
    /** Insiders job title per the sourced filing  */
    reportedTitle?: string;
    /** As-reported (unadjusted) unit price at which shares were acquired or disposed, represented in USD. */
    tranPrice?: number;
    /**  	As-reported (unadjusted) number of shares acquired or disposedValue of the transaction, calculated as Tran_Shares * Tran_Price, represented in USD. This value is not adjusted for corporate actions.  */
    tranShares?: number;
    /** Value of the transaction, calculated as Tran_Shares * Tran_Price, represented in USD. This value is not adjusted for corporate actions. */
    tranValue?: number;
  }