
import IEXRequest from "./request"
import * as iex from "./types";


class Crypto {
    req: IEXRequest
    constructor(req: IEXRequest) {
        this.req = req
    }

    public crypto = (crypto: iex.CryptoCurrency): IEXRequest => {
        this.req.datatype = "crypto";
        this.req.cryptoCurrency = crypto;
        return this.req;
      };

    public book = (): Promise<any> => {
        return this.req.request("book");
    };

    public price = (): Promise<any> => {
        return this.req.request("price");
    };

    public quote = (): Promise<iex.CryptoQuote> => {
        return this.req.request("quote");
    };

    public events = (): Promise<any> => {
        return this.req.request("cryptoEvents");
    };

}

export default Crypto;