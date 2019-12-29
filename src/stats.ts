

import IEXRequest from "./request"
import * as iex from "./types";


class Statistics {
    req: IEXRequest
    constructor(req: IEXRequest) {
        this.req = req
    }

/** Returns daily stats for a given time frame */
public historicalStats = (
    params: iex.StatType,
    date?: string
  ): Promise<iex.HistoricalStats | iex.Recent[] | iex.IntraDay> => {
    this.req.datatype = "stats";
    return this.req.request(`${params ? params : ""}${date ? "/" + date : ""}`);
  };

public stats = (stat = ""): Promise<iex.Stats> => {
    return this.req.request(`stats/${stat}`);
  };

public intraday = (): Promise<iex.Stats> => {
    return this.req.request(`intraday`);
  };

public recent = (): Promise<iex.Stats> => {
    return this.req.request(`recent`);
  };

public records = (): Promise<iex.Stats> => {
    return this.req.request(`records`);
};

}

export default Statistics;