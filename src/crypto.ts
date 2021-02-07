
import IEXRequest from "./request"
import { CryptoQuote } from "./types";


class Crypto {
    constructor(private req: IEXRequest) {
        this.req = req
    }

    public book = (): Promise<any> => {
        return this.req.request("book");
    };

    public price = (): Promise<any> => {
        return this.req.request("price");
    };

    public quote = (): Promise<CryptoQuote> => {
        return this.req.request("quote");
    };

    public events = (): Promise<any> => {
        return this.req.request("cryptoEvents");
    };

}

export default Crypto;