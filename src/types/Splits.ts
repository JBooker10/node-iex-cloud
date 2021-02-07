export interface Splits {
    /** refers to the split ex-date */
    exDate?: string;
    /** refers to the split declaration date */
    declaredDate?: string;
    /** refers to the split ratio. The split ratio is an inverse of the number of shares that a holder of the stock would have after the split divided by the number of shares that the holder had before.  */
    ratio?: number;
    /**   	To factor of the split. Used to calculate the split ratio fromfactor/tofactor = ratio (eg ½ = 0.5) */
    toFactor?: string;
    /**  	To factor of the split. Used to calculate the split ratio fromfactor/tofactor = ratio (eg ½ = 0.5) */
    fromFactor?: string;
    /** Description of the split event. */
    description?: string;
  }