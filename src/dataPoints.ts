
import IEXRequest from "./request"
import * as iex from "./types";


class DataPoints {
    req: IEXRequest
    constructor(req: IEXRequest) {
        this.req = req
    }  

    public market() {
        return this.req.request(`market/${this.req.stockSymbol}`);
    }

    public treasury() {
        return this.req.request(`market/${this.req.stockSymbol}`);
    }

    public energy() {
        return this.req.request(`energy/${this.req.stockSymbol}`);
    }
}

export default DataPoints;