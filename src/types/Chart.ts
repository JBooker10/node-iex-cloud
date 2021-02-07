export interface Chart {
  /** Formatted as YYYY-MM-DD */
  date: Date;
  /** Adjusted data for historical dates. Split adjusted only. */
  open?: number;
  /**  Adjusted data for historical dates. Split adjusted only. */
  high?: number;
  /** Adjusted data for historical dates. Split adjusted only. */
  low?: number;
  /** Adjusted data for historical dates. Split adjusted only. */
  close?: number;
  /** Unadjusted data for historical dates.  */
  volume?: number;
  /** Unadjusted data for historical dates. */
  uOpen?: number;
  /** Unadjusted data for historical dates. */
  uHigh?: number;
  /** Unadjusted data for historical dates. */
  uLow?: number;
  /** Unadjusted data for historical dates. */
  uClose?: number;
  /** Unadjusted data for historical dates. */
  uVolume?: number;
  /**  Change from previous trading day. */
  change?: number;
  /**  Change percent from previous trading day. */
  changePercent?: number;
  /** A human readable format of the date depending on the range. */
  label?: string;
  /** Percent change of each interval relative to first value. Useful for comparing multiple stocks.  */
  changeOverTime?: number;
}

export interface DynamicChart {
  range: string;
  data: Chart[];
}

export interface ChartParams {
  date?: string;
  chartByDay?: boolean;
  /**  boolean. Will return adjusted data only with keys date, close, and volume. */
  chartCloseOnly?: boolean;
  /** boolean. If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts. */
  chartSimplify?: boolean;
  /**  number. If passed, chart data will return every Nth element as defined by chartInterval */
  chartInterval?: number;
  /** boolean. If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value. */
  changeFromClose?: boolean;
  /** If passed, chart data will return the last N elements from the time period defined by the range parameter */
  chartLast?: number;
  /** 
      Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. */
  exactDate?: string;
  range?: string;
  [key: string]: any;
}

export type Range =
  | "max"
  | "5y"
  | "2y"
  | "1y"
  | "ytd"
  | "6m"
  | "3m"
  | "1m"
  | "1mm"
  | "5d"
  | "5dm"
  | "date"
  | "dynamic";
