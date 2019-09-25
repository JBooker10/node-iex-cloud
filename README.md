# node-iex-cloud

[![Build status](https://ci.appveyor.com/api/projects/status/pjxh5g91jpbh7t84?svg=true)](https://www.npmjs.com/package/node-iex-cloud)
[![install size](https://packagephobia.now.sh/badge?p=node-iex-cloud)](https://packagephobia.now.sh/result?p=node-iex-cloud)

See IEX API [Documentation](https://iexcloud.io/docs/api) for more information.

## Installation and Usage

```bash
npm i node-iex-cloud
```

ES6+

```javascript
import { IEXCloudClient } from "node-iex-cloud";
```

import a promise based HTTP Client to use along side `node-iex-cloud`. Node-iex-cloud supports both `node-fetch` and `axios`

```javascript
// import a promise base library
import fetch from "node-fetch"; // or
import axios from "axios";
```

common.js

```javascript
const { IEXCloudClient } = require("node-iex-cloud");
```

```javascript
// import a promise base library
const fetch = require("node-fetch"); // or
const axios = require("axios");
```

## Configuration and Setup

IEX Cloud uses a message weighting system to measure usage in message counts, make sure sandbox is enabled to `true` in development to avoid reaching data limits or overages. (Note: when enabling sandbox to true, the publishable key token is automatically prefixed with the letter T and doesn't require changing the existing token to access Test Data ) MAKE SURE PUBLIC KEY & NOT SECRET KEY IS BEING USED as it is prefixed with: `"pk_"`

```javascript
const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: "pk_21b4ffeccc6e3cnc1df07467a47231c6",
  version: "stable"
});
```

## Examples

The first method takes in a company symbol (an abbreviation used to uniquely identify publicly traded shares). The subequent method retreive the specfic IEX data type.

### Stocks

```javascript
// stock/google/financials?period=annual
iex
  .symbol("googl")
  .financials("quarterly")
  .then(res => console.log(res));
```

```javascript
// stock/googl/ceo-compensation
iex
  .symbol("googl")
  .ceoCompensation()
  .then(res => console.log(res));
```

```javascript
// Query Charts
iex
  .symbol("googl")
  .chart("dynamic", { chartCloseOnly: true })
  .then(res => console.log(res));

iex
  .symbol("aapl")
  .chart("6m", { chartCloseOnly: true, chartSimplify: true, chartInterval: 2 })
  .then(res => console.log(res));

// Query Charts by date
iex
  .symbol("vea")
  .chart("date", { date: "20190924", chartByDay: true })
  .then(res => console.log(res));
``` 

### Crypto Currencies

Only quotes are available see [Documentation](https://iexcloud.io/docs/api/#crypto) for more info

```javascript
// crypto/btcusd/quote
iex
  .crypto("btcusd")
  .quote()
  .then(res => console.log(res));

// crypto/ethusd/quote
iex
  .crypto("ethusd")
  .quote()
  .then(res => console.log(res));
```

### Exchange Rates

```javascript
// fx/rate/YEN/USD
iex.forex({ from: "YEN", to: "USD" }).then(res => console.log(res));
```

### Available Methods

- [x] `balanceSheet(period?)`
- [x] `book`
- [x] `chart(range?: string, params?: object)`
- [x] `cashFlow(period?: string, last?: number)`
- [x] `ceoCompensation`
- [x] `company`
- [x] `delayedQuote`
- [x] `dividends(range?)`
- [x] `earnings(last, field)`
- [x] `estimates`
- [x] `financials(period?: string)`
- [x] `news(last?: number)`
- [x] `fundOwnership`
- [x] `income(period?: string, last?: number)`
- [x] `insiderRoster`
- [x] `insiderSummary`
- [x] `insiderTransactions`
- [x] `institutionalOwnership`
- [x] `intradayPrices(params?: object)`
- [x] `logo`
- [x] `largestTrades`
- [x] `options(expiration?: string, optionSide?: string)`
- [x] `peers`
- [x] `previous`
- [x] `price`
- [x] `priceTarget`
- [x] `ohlc`
- [x] `sentiment(type?: string, date?: string)`
- [x] `quote(field: string)`
- [x] `recommendationTrends`
- [x] `stats(stat?: string)`
- [x] `splits(range)`
- [x] `shortInterest(date?: string)`
- [x] `volumeByVenue`

### Search Companies

[Only included with paid subscription plans](https://iexcloud.io/docs/api/#search)

```javascript
// search/microsoft
iex.search("microsoft").then(res => console.log(res));

// search/google
iex.search("google").then(res => console.log(res));
```

### Advance Searching

[Only included with paid subscription plans](https://iexcloud.io/docs/api/#search)

To retreive a company's stock data using a company's full name, use the search method to
search for the `companyName` then access the first index to grab the most relevant `symbol`

```javascript
// search/facebook
iex.search("facebook").then(res =>
  // stock/fb/company
 .then(res => iex.symbol(res[0].symbol).company())
 .then(res => console.log(res));
```

```javascript
// search/international%20business%20machines
iex
  .search("international business machines")
  // stock/ibm/company
  .then(res => iex.symbol(res[0].symbol).balanceSheet())
  .then(res => console.log(res));
);
```

### Market

```javascript
// stock/market/today-earnings
iex.market("today-earnings").then(res => console.log(res));
```

### Data Points

Data points are available per symbol and return individual plain text values.

```javascript
// data-points/aapl/quote-latestprice
iex
  .symbol("aapl")
  .dataPoints("quote-latestprice")
  .then(res => console.log(res));
```

### Batch Symbols

Use method `symbols` instead of `"symbol"` to batch multiple stock symbols together, IEX allows only up to `10` symbols to be made per request.

```javascript
// batch?symbols=googl,amzn,fb&types=company
iex
  .symbols("googl,amzn,fb")
  .company()
  .then(res => console.log(res));
```

```javascript
// batch?symbols=googl,amzn,fb&types=price
iex
  .symbols("googl,amzn,fb,aapl")
  .price()
  .then(res => console.log(res));
```

### Batch Types

Use the method `batch` to batch Request of multiple data types, all IEX types are supported. IEX allows only up to `10` types to be made per request.

```javascript
// stock/googl/batch?types=stock,company,balance-sheet,cash-flow,estimates
iex
  .symbol("googl")
  .batch("company", "balance-sheet", "cash-flow", "estimates")
  .then(res => console.log(res));
```

### Batch Symbols & Types

```javascript
// batch?symbols=googl,amzn,fb,aapl&types=company,balance-sheet,cash-flow,estimates
iex
  .symbols("googl,amzn,fb,aapl")
  .batch("company", "balance-sheet", "cash-flow", "estimates")
  .then(res => console.log(res));
```

### IEX Last

Last provides trade data for executions on IEX.

```javascript
// tops/last?symbols=aapl,googl,amzn
iex.tops("aapl", "googl", "amzn").then(res => console.log(res));
```

### IEX Historical Stats

```javascript
// stats/intraday
iex.historicalStats("intraday").then(res => console.log(res));
```

### IEX Deep

DEEP is used to receive real-time depth of book quotations direct from IEX.

```javascript
// deep/trading-status?symbols=msft
iex
  .symbol("msft")
  .deep("trading-status")
  .then(res => console.log(res));
```

### SSE Streaming

Not Yet Supported

### Web Sockets

Coming Soon
