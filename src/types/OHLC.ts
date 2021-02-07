export interface OHLC {
    /**  	refers to the official open */
    open: {
      /** refers to the official open price. Will return 0 if symbol has no volume for the day. */
      price: number;
      /** refers to the official listing exchange time for the open in millisecond epoch  */
      time: number;
    };
    /** refers to the official close */
    close: {
      /** refers to the official close price. Will return 0 if symbol has no volume for the day. */
      price: number;
      /** refers to the official listing exchange time for the close in millisecond epoch */
      time: number;
    };
    /** refers to the market-wide highest price from the SIP (15 minute delayed) */
    high: number;
    /** refers to the market-wide lowest price from the SIP (15 minute delayed)  */
    low: number;
  }