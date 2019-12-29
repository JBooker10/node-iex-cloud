
import IEXRequest from "./request"
import * as iex from "./types";



class TimeSeries {
    req: IEXRequest
    p: string
    constructor(req: IEXRequest) {
        this.req = req
        this.p = "PREMIUM_WALLSTREETHORIZON_"
    }  

    /** This is a meeting where company executives provide information about the company’s performance and its future prospects. */
    public analystDay(refId?: string) {
        return this.req.request(`${this.p}ANALYST_DAY/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public boardOfDirectorsMeeting(refId?: string) {
        return this.req.request(`${this.p}BOARD_OF_DIRECTORS_MEETING/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public businessUpdate(refId?: string) {
        return this.req.request(`${this.p}BUSINESS_UPDATE/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public buyBack(refId?: string) {
        return this.req.request(`${this.p}BUYBACK/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public capitalMarketsDay(refId?: string) {
        return this.req.request(`${this.p}CAPITAL_MARKETS_DAY/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public advancedDistribution(refId?: string) {
        return this.req.request(`advanced_distribution/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public advancedDividends(refId?: string) {
        return this.req.request(`advanced_dividends/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public advancedReturnOnCapital(refId?: string) {
        return this.req.request(`advanced_return_of_capital/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public advancedRights(refId?: string) {
        return this.req.request(`advanced_rights/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public advancedRightsToPurchase(refId?: string) {
        return this.req.request(`advanced_right_to_purchase/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public advancedSecurityReclassification(refId?: string) {
        return this.req.request(`advanced_security_reclassification/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public advancedSecuritySwap(refId?: string) {
        return this.req.request(`advanced_security_swap/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public advancedSpinOff(refId?: string) {
        return this.req.request(`advanced_spinoff/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }

    public advancedSplits(refId?: string) {
        return this.req.request(`advanced_splits/${this.req.stockSymbol}/${refId ? refId : ""}`);
    }
}

export default TimeSeries;