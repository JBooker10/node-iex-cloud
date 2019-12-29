
import IEXRequest from "./request"
import * as iex from "./types";


class Deep {
    req: IEXRequest
    constructor(req: IEXRequest) {
        this.req = req
    }

    public symbol = (): Promise<any> => {
        return this.req.request(``);
      };

    /** DEEP broadcasts an Auction Information Message every one second between the Lock-in Time and the auction match for Opening and Closing Auctions, and during the Display Only Period for IPO, Halt, and Volatility Auctions. Only IEX listed securities are eligible for IEX Auctions. */
    public auction = (): Promise<any> => {
        return this.req.request(`auction`);
      };

    public book = (): Promise<any> => {
        return this.req.request(`book`);
    };

    public opHaltStatus = (): Promise<any> => {
        return this.req.request(`op-halt-status`);
    };

    public officialPrice = (): Promise<any> => {
        return this.req.request(`official-price`);
    };

    public securityEvent = (): Promise<any> => {
        return this.req.request(`security-event`);
    };

    /** In association with Rule 201 of Regulation SHO, the Short Sale Price Test message is used to indicate when a Short Sale Price Test restriction is in effect for a security.
 */
    public ssrStatus = (): Promise<any> => {
        return this.req.request(`ssr-status`);
    };

    /** The System Event message is used to indicate events that apply to the market or the data feed. */
    public systemEvent = (): Promise<any> => {
        return this.req.request(`ssr-status`);
    };

    /** Trade report messages are sent when an order on the IEX Order Book is executed in whole or in part. DEEP sends a Trade report message for every individual fill. */
    public trades = (): Promise<any> => {
        return this.req.request(`trades`);
    };

    /** Trade break messages are sent when an execution on IEX is broken on that same trading day. Trade breaks are rare and only affect applications that rely upon IEX execution based data. */
    public tradeBreaks = (): Promise<any> => {
        return this.req.request(`trade-breaks`);
    };

    /** The Trading status message is used to indicate the current trading status of a security. For IEX-listed securities, IEX acts as the primary market and has the authority to institute a trading halt or trading pause in a security due to news dissemination or regulatory reasons. For non-IEX-listed securities, IEX abides by any regulatory trading halts and trading pauses instituted by the primary or listing market, as applicable. */
    public tradingStatus = (): Promise<any> => {
        return this.req.request(`trading-status`);
    };
}

export default Deep;