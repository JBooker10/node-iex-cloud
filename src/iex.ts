import IEXRequest from "./request"
import * as iex from "./types";


class IEXCloud {
    req: IEXRequest
    constructor(f: typeof fetch, config: iex.Configuration) {
       this.req = new IEXRequest(f, config)
    }
}