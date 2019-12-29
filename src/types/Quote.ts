export default interface Quote {
    latestPrice: number;
    latestVolume: number;
    latestUpdate: number;
    latestTime: string;
    calculationPrice: string;
    latestSource: string;
    change: number;
    changePercent: number;
    open: number;
    openTime: number;
    close: number;
    closeTime: number;
    high: number;
    low: number;
    extendedPrice: number;
    extendedChange: number;
    extendedChangePercent: number;
    extendedPriceTime: number;
    delayedPrice: number;
    delayedPriceTime: number;
    marketCap: number;
    avgTotalVolume: number;
    week52High: number;
    week52Low: number;
    ytdChange: number;
    iexRealtimePrice: number;
    iexRealtimeSize: number;
    iexLastUpdated: number;
    iexMarketPercent: number;
    iexVolume: number;
    iexBidPrice: number;
    iexBidSize: number;
    iexAskPrice: number;
    iexAskSize: number;
    symbol: string;
    companyName: string;
  }

  export interface DelayedQuote {
    symbol: string;
    delayedPrice: number;
    high: number;
    low: number;
    delayedSize: number;
    delayedPriceTime: number;
    totalVolume: number;
    processedTime: number;
  }

  export interface CryptoQuote {
    symbol: string;
    primaryExchange: string;
    sector: string;
    calculationPrice: string;
    high: string;
    low: string;
    latestPrice: string;
    latestSource: string;
    latestUpdate: number;
    latestVolume: string;
    previousClose: string;
  }