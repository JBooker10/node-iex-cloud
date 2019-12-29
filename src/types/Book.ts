
import Quote  from "./Quote"
import Trades  from "./Trades"

export default interface Book {
    quote: Quote;
    bids: any[];
    asks: any[];
    trades: Trades[];
    systemEvents: {
      systemEvent: string;
      timestamp: number;
    };
}