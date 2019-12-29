import * as iex from "./types";


export default class IEXRequest {
    fetchFunc: typeof fetch;
    publishable: string;
    sandbox: boolean;
    version: iex.Version;
    stockSymbol: string;
    stockSymbols: string[];
    datatype: string;
    cryptoCurrency: string;

    public constructor(
        fetchFunc: typeof fetch,
        { publishable, sandbox = false, version = "beta" }: iex.Configuration
      ) {
        (this.fetchFunc = fetchFunc),
          (this.publishable = publishable),
          (this.version = version),
          (this.sandbox = sandbox),
          (this.datatype = "stock"),
          (this.cryptoCurrency = ""),
          (this.stockSymbol = ""),
          (this.stockSymbols = []),
          (this.request = this.request);
      }

      private setToken = (token: string) => {
        return this.sandbox && token[0] !== "T" ? "T" + token : token;
      };

      params = (params = ""): string => {
        const env = this.sandbox ? "sandbox" : "cloud";
        const url = `https://${env}.iexapis.com/${this.version}/${this.datatype}`;
        const operand = params.match(new RegExp("\\?", "g"));
        const q = operand && operand[0] === "?" ? "&" : "?";
        const pk = `token=${this.setToken(this.publishable)}`;
        const request = `${url}/${this.stockSymbol}/${params}${q}${pk}`;
    
        if (this.datatype === "deep") {
          const request = `${url}/${params}?symbols=${this.stockSymbol}&${pk}`;
          this.datatype = "stock";
          this.sandbox && console.log(request);
          return request;
        }
    
        if (this.datatype === "stock/market/batch") {
          const request = `${url}?symbols=${this.stockSymbols.map(
            symbol => symbol
          )}&types=${params}&${pk}`;
          this.datatype = "stock";
          this.sandbox && console.log(request);
          return request;
        }
    
        if (this.datatype === "crypto") {
          const request = `${url}/${this.cryptoCurrency}/${params}${q}${pk}`;
          this.datatype = "stock";
          this.sandbox && console.log(request);
          return request;
        }
    
        if (
          this.datatype === "tops/last" ||
          this.datatype === "stock/market" ||
          this.datatype === "fx" ||
          this.datatype === "stats" ||
          this.datatype === "search"
        ) {
          const request = `${url}/${params}${q}${pk}`;
          this.datatype = "stock";
          this.sandbox && console.log(request);
          return request;
        }
    
        this.sandbox && console.log(request);
        return request;
      };

      batchParams = (...types: string[]): string => {
        const env = this.sandbox ? "sandbox" : "cloud";
        const url = `https://${env}.iexapis.com/${this.version}/${this.datatype}`;
        let symbols = `${this.stockSymbols.map(symbol => symbol)}`;
        let batchTypes = `types=${types.map(
          (type: any) => type
        )}&token=${this.setToken(this.publishable)}`;
        let request;
    
        if (this.datatype === "stock/market/batch") {
          request = `${url}/batch?symbols=${symbols}&${batchTypes}`;
          this.datatype = "stock";
          this.sandbox && console.log(request);
          return request;
        }
    
        request = `${url}/${this.stockSymbol}/batch?${batchTypes}`;
        this.sandbox && console.log(request);
        return request;
      };

      request = (params: string): Promise<any> => {
        return this.response(this.params, params);
      };

      response = async (req: any, params: any) => {
        try {
          const res = await this.fetchFunc(req(params));
    
          if (typeof res.headers.get === "function") {
            const contentType = res.headers.get("content-type");
            if (contentType === "application/json; charset=utf-8") {
              return await res.json();
            }
    
            if (res.status >= 400) {
              throw new Error(await res.text());
            }
          }
          return (<any>res).data;
        } catch (err) {
          console.error(err);
        }
      };
}


