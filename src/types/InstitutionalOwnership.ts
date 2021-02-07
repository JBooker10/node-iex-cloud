export interface InstitutionalOwnership {
    /** Share amount held by the fund as of the report date, adjusted for corporate actions */
    adjHolding?: number;
    /** Total share amount multiplied by the latest month-end share price, adjusted for corporate actions in USD  */
    adjMv?: number;
    /**  Name of the entity */
    entityProperName?: string;
    /** refers to the update time of report_date in milliseconds since midnight Jan 1, 1970. */
    reportDate?: number;
    /** Share amount held by the institution as reported in the source */
    reportedHolding?: number;
  }