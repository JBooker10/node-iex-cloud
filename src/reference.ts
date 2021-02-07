
import IEXRequest from "./request"

class ReferenceData {
    constructor(private req: IEXRequest) {
        this.req = req
    }

    /** This call returns an array of symbols that IEX Cloud supports for API calls. */
    public symbols = () => {
        return this.req.request("symbols")
    }

    /** Returns an array of tags. Tags can be found on each company. */
    public tags = () => {
        return this.req.request("tags")
    }

    public cryptoSymbols = () => {
      return this.req.request("crypto/symbols")
    }

    public fxSymbols = () => {
    this.req.datatype = "ref-data"
    return this.req.request("fx/symbols")
    }

    /** This call returns an array of symbols the Investors Exchange supports for trading. This list is updated daily as of 7:45 a.m. ET. Symbols may be added or removed by the Investors Exchange after the list was produced. */
    public iexSymbols = () => {
        return this.req.request("iex/symbols")
     }

     /** This call returns an array of international symbols that IEX Cloud supports for API calls. */
    public internationalSymbols = (region: string, exchange: string) => {
        return this.req.request(region ? `region/${region}/symbols` : `exchange/${exchange}/symbols`)
    }

    /** Returns an array of exchanges. */
    public exchanges = () => {
        return this.req.request("exchanges")
    }

    /** This call returns an array of mutual fund symbols that IEX Cloud supports for API calls. */
    public mutualFunds = () => {
        return this.req.request("mutual-funds/symbols")
    }

    /** This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates. */
    public options = () => {
        return this.req.request("options/symbols")
    }

    /** This call returns an array of OTC symbols that IEX Cloud supports for API calls. */
    public otc = () => {
        return this.req.request("otc/symbols")
    }

    /** Returns an array of sectors. */
    public sectors = () => {
        return this.req.request("sectors")
    }

}

export default ReferenceData;