
import IEXRequest from "./request"
import * as iex from "./types";

/** TOPS provides IEX’s aggregated best quoted bid and offer position in near real time for all securities on IEX’s displayed limit order book. TOPS is ideal for developers needing both quote and trade data. */
class Tops {
    req: IEXRequest
    constructor(req: IEXRequest) {
        this.req = req
    }

}

export default Tops;