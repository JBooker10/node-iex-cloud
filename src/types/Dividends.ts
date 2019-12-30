export default interface Dividends {
  /** refers to the dividend ex-date */
  exDate: Date;
  /** refers to the payment date */
  paymentDate: Date;
  /** refers to the dividend record date */
  recordDate: Date;
  /** refers to the dividend declaration date */
  declaredDate: Date;
  /**	refers to the payment amount */
  amount: number;
  /** Type of dividend event */
  flag: string;
  /** Currency of the dividend */
  currency: string;
  /** Description of the dividend event */
  description: string;
  /** Frequency of the dividend */
  frequency: string;
}
