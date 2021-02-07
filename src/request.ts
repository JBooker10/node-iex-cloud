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
    fetchFunc: typeof fetch | any,
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
    let request = `${url}/${this.stockSymbol}/${params}${q}${pk}`;

    switch (this.datatype) {
      case "deep":
        request = `${url}/${params}?symbols=${this.stockSymbol}&${pk}`;
        this.datatype = "stock";
        this.sandbox;
      break;
      case "stock/market/batch":
        request = `${url}?symbols=${this.stockSymbols.map(symbol => symbol
        )}&types=${params}&${pk}`;
        this.datatype = "stock";
        this.sandbox;
      break;
      case "crypto":
        request = `${url}/${this.cryptoCurrency}/${params}${q}${pk}`;
        this.datatype = "stock";
        this.sandbox;
      break;
      case "tops":
      case "stock/market":
      case "fx":
      case "stats":
      case "search":
      case "time-series":
      case "ref-data":
        request = `${url}/${params}${q}${pk}`;
        this.datatype = "stock";
        this.sandbox;
      break;
      default:
        this.sandbox
    }
    
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
      this.sandbox;
      return request;
    }

    request = `${url}/${this.stockSymbol}/batch?${batchTypes}`;
    this.sandbox;
    return request;
  };

  request = (params: string): Promise<any> => {
    return this.response(this.params, params);
  };

  response = async (req: any, params: any, range?: any) => {
    try {
      let n = range ? range : "";
      const res = await this.fetchFunc(req(params + n));
      if (typeof res.headers.get === "function") {
        const contentType = res.headers.get("content-type");
        if (contentType === "application/json; charset=utf-8") {
          return await res.json();
        }

        if (res.status >= 400) {
          const error = await res.text();
          throw new Error(error);
        }
      }
      return (<any>res).data;
    } catch (err) {
      return err.response ? err.response.data : err;
    }
  };
}
