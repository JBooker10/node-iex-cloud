export default interface Forex {
    date: Date;
    fromCurrency: string;
    toCurrency: string;
    rate: number;
}

  export interface ForexParams {
    /** valid three character currency code */
    from: string;
    /** valid three character currency code */
    to: string;
  }