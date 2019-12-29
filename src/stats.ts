

import IEXRequest from "./request"
import * as iex from "./types";


class Statistics {
    req: IEXRequest
    constructor(req: IEXRequest) {
        this.req = req
    }

/** Returns daily stats for a given time frame */
public historical = (date?: string): Promise<iex.HistoricalStats> => {
    return this.req.request(`historical/${date ? "/" + date : ""}`);
  };

public intraday = (): Promise<iex.IntraDay> => {
    return this.req.request(`intraday`);
  };

public recent = (): Promise<iex.Recent[]> => {
    return this.req.request(`recent`);
  };

public records = (): Promise<iex.Records[]> => {
    return this.req.request(`records`);
};

}

export default Statistics;