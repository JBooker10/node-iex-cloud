
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

  public latest = (...symbols: any[]): Promise<any> => {
    return this.req.request(`latest?symbols=${symbols}`);
  };

  public convert = ({ amount, symbols }: any): Promise<any> => { 
    return this.req.request(`convert?symbols=${symbols}${amount?"&amount="+amount: ""}`);
  }

  public historical = ({from, to, on, first, filter, symbols, last}: any): Promise<any> => {
    return this.req.request(`historical?symbols=${symbols}${last ? "&last="+last : ""}${from? "&from="+from: ""}${to?"&to="+to:""}${on?"&on=":""}${first?"&first=":""}${filter? "&filter="+filter: ""}`
    );
  };

}

export default Forex;