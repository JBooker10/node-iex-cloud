import * as iex from "./types";
import Crypto from "./crypto";
import Stock from "./stock";
import Stocks from "./stocks";
import Market from "./market";
import ReferenceData from "./reference";
import DataPoints from "./dataPoints";
import TimeSeries from "./timeSeries";
import Statistics from "./stats";
import IEXRequest from "./request";
import Forex from "./forex";

export default class IEXCloudClient {
  private req: IEXRequest;

  constructor(f: typeof fetch | any, config: iex.Configuration) {
    this.req = new IEXRequest(f.bind(this), config);
  }

  /**  Takes in a stock symbol, a unique series of letters assigned to a security   */
  public symbol = (symbol: string): Stock => {
    this.req.stockSymbol = symbol;
    return new Stock(this.req);
  };

  /** Takes in multiple stock symbols, and batches them to a single request  */
  public batchSymbols = (...symbols: string[]): Stocks => {
    this.req.datatype = "stock/market/batch";
    this.req.stockSymbols = symbols;
    return new Stocks(this.req);
  };

  /** Takes in multiple stock symbols, and batches them to a single request  */
  public symbols = (...symbols: string[]): Stocks => {
    this.req.datatype = "stock/market/batch";
    console.warn(
      "This method will be deprecated please use batchSymbols to batch multiple stock symbols together"
    );
    this.req.stockSymbols = symbols;
    return new Stocks(this.req);
  };

  public tops = (): Promise<any> => {
    this.req.datatype = "tops";
    return this.req.request("");
  };

  /**  Takes in a crypto currency   */
  public crypto = (crypto: iex.CryptoCurrency): Crypto => {
    this.req.datatype = "crypto";
    this.req.cryptoCurrency = crypto;
    return new Crypto(this.req);
  };

  public market = (): Market => {
    this.req.datatype = `stock/market`;
    return new Market(this.req);
  };

  public forex = (): Forex => {
    this.req.datatype = `fx`;
    return new Forex(this.req);
  };

  public refData = (): ReferenceData => {
    this.req.datatype = `ref-data`;
    return new ReferenceData(this.req);
  };

  public dataPoints = (): DataPoints => {
    this.req.datatype = `data-points`;
    return new DataPoints(this.req);
  };

  public stats = (): Statistics => {
    this.req.datatype = `stats`;
    return new Statistics(this.req);
  };

  public timeSeries = (): TimeSeries => {
    this.req.datatype = `time-series`;
    return new TimeSeries(this.req);
  };

  /**  Returns an array of symbols up to the top 10 matches.
   * Results will be sorted for relevancy. Search currently defaults to equities only, where the symbol returned is supported by endpoints listed under the Stocks category.
   * @params search by symbol or security name.
   */
  public search = (symbol: string): Promise<iex.Search[]> => {
    this.req.datatype = "search";
    return this.req.request(symbol);
  };
}
