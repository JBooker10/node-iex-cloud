export interface Trades {
    price?: number;
    size?: number;
    tradeId?: number;
    isISO?: boolean;
    isOddLot?: boolean;
    isOutsideRegularHours?: boolean;
    isSinglePriceCross?: boolean;
    isTradeThroughExempt?: boolean;
    timestamp?: number;
  }

  export interface LargestTrades {
    price?: number;
    size?: number;
    time?: number;
    timelabel?: number;
    venue?: number;
    venueName?: string;
  }