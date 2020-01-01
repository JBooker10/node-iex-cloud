import Quote from "./Quote";
import Trades from "./Trades";

export default interface Book {
    quote: Quote;
    bids: any[];
    asks: any[];
    trades: Trades[];
    systemEvent: {
      systemEvent: string;
      timestamp: number;
    };
}
