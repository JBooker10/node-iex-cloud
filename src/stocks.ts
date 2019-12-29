import * as iex from "./types";
import Crypto from "./crypto";
import Stock from "./stock"
import Market from "./market"
import ReferenceData from "./reference"
import DataPoints from "./dataPoints"
import Deep from "./deep";
import Statistics from "./stats";
import Tops from "./tops";

import IEXRequest from "./request";
import Forex from "./forex";

export default class IEXCloudClient {
  private req: IEXRequest
  private cryptoCurrency: Crypto
  private stock: Stock
  private stockMarket: Market
  private foreignExchange: Forex
  private referenceData: ReferenceData
  private datapoints: DataPoints
  private statistics: Statistics
  private iexTops: Tops

  constructor(f: typeof fetch, config: iex.Configuration) {
    this.req = new IEXRequest(f, config)
    this.cryptoCurrency = new Crypto(this.req) 
    this.stock = new Stock(this.req)
    this.stockMarket = new Market(this.req)
    this.foreignExchange = new Forex(this.req)
    this.referenceData = new ReferenceData(this.req)
    this.datapoints = new DataPoints(this.req)
    this.statistics = new Statistics(this.req)
    this.iexTops = new Tops(this.req)
  }

  /**  Takes in a stock symbol, a unique series of letters assigned to a security   */
  public symbol = (symbol: string): Stock => {
    this.req.stockSymbol = symbol;
    return this.stock
  };

    /** Takes in multiple stock symbols, and batches them to a single request  */
  public symbols = (...symbols: string[]): Stock => {
    this.req.datatype = "stock/market/batch";
    this.req.stockSymbols = symbols;
    return this.stock;
  };


  public tops = (): Promise<any> => {
    this.req.datatype = "tops"
    return this.req.request("");
  };

    /**  Takes in a crypto currency   */
  public crypto = (crypto: iex.CryptoCurrency): Crypto => {
    this.req.datatype = "crypto";
    this.req.cryptoCurrency = crypto;
    return this.cryptoCurrency;
  };

  public market = (): Market => {
    this.req.datatype = `stock/market`;
    return this.stockMarket;
  };

  public forex = (): Forex => {
    this.req.datatype = `fx`;
    return this.foreignExchange;
  };

  public refData = (): ReferenceData => {
    this.req.datatype = `ref-data`;
    return this.referenceData;
  };

  public dataPoints = (): DataPoints => {
    this.req.datatype = `data-points`;
    return this.datapoints;
  };

  public stats = (): Statistics => {
    this.req.datatype = `stats`;
    return this.statistics;
  };
 
  public timeSeries = (): Tops => {
    this.req.datatype = `time-series`;
    return this.iexTops;
  };
}
