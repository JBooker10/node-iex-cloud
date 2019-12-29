
import IEXRequest from "./request"
import * as iex from "./types";


class Forex {
    req: IEXRequest
    constructor(req: IEXRequest) {
        this.req = req
    }

 /** This endpoint provides an end of day exchange rate of a given currency pair */
  public rate = (params: iex.ForexParams): Promise<any> => {
    return this.req.request(`rate/${params.from}/${params.to}`);
  };

  /** This endpoint returns real-time foreign currency exchange rates data updated every 250 milliseconds. */
  public latest = (): Promise<any> => {
    return this.req.request(`latest?symbols=${this.req.stockSymbols}`);
  };

  public convert = ({ amount, symbols }: any): Promise<any> => { 
    return this.req.request(`convert?symbols=${ symbols ? symbols : this.req.stockSymbols}${amount?"&amount="+amount: ""}`);
  }

  public historical = ({from, to, on, first, filter, symbols, last}: any): Promise<any> => {
    return this.req.request(`historical?symbols=${this.req.stockSymbols}${last ? "&last="+last : ""}${from? "&from="+from: ""}${to?"&to="+to:""}${on?"&on=":""}${first?"&first=":""}${filter? "&filter="+filter: ""}`
    );
  };

}

export default Forex;