
import IEXRequest from "./request"
import { MarketType } from "./types";

class Market {
    constructor(private req: IEXRequest) {
        this.req = req
    }

    /** Returns an array of quote objects for a given collection type. Currently supported collection types are sector, tag, and list */
    public collection = ({ param, collectionName }: any) => {
    return this.req.request(`collection/${param}?collectionName=${collectionName}`);
    };

    /** Returns earnings that will be reported today as three arrays: before the open bto, after market close amc and during the trading day other. Each array contains an object with all keys from earnings, a quote object, and a headline key. */
    public todayEarnings = () => {
        return this.req.request(`today-earnings`);
        };

    /** This returns a list of upcoming IPOs scheduled for the current and next month. The response is split into two structures: rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user. */
    public upcomingIPOs = () => {
        return this.req.request(`upcoming-ipos`);
        };
    
    
    /** This returns a list of today IPOs scheduled for the current and next month. The response is split into two structures: rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user. */
    public todayIPOs = () => {
        return this.req.request(`today-ipos`);
    };

    /** This endpoint returns real time traded volume on U.S. markets. */
    public volume = () => {
        return this.req.request(`volume`);
    };

    /** This returns an array of each sector and performance for the current trading day. Performance is based on each sector ETF. */
    public sectorPerformance = () => {
        return this.req.request(`sector-performance`);
    };

    /** Returns an array of quotes for the top 10 symbols in a specified list. */
    public list = (listType: MarketType, { displayPercent, listLimit }: any) => {
        return this.req.request(`list/${listType}`);
    };

}

export default Market;
