# node-iex-cloud

[![Build status](https://ci.appveyor.com/api/projects/status/pjxh5g91jpbh7t84?svg=true)](https://www.npmjs.com/package/node-iex-cloud) [![install size](https://packagephobia.now.sh/badge?p=node-iex-cloud)](https://packagephobia.now.sh/result?p=node-iex-cloud)

See IEX API [Documentation](https://iexcloud.io/docs/api) for more information.

## Installation and Usage

```bash
npm i node-iex-cloud
```

ES6+

```javascript
import IEXCloudClient from "node-iex-cloud";
```

import a promise based HTTP Client to use along side `node-iex-cloud`. Node-iex-cloud supports both `node-fetch` and `axios`

```javascript
// import a promise base library
import fetch from "node-fetch";
```

common.js

```javascript
const { IEXCloudClient } = require("node-iex-cloud");
```

```javascript
// import a promise base library
const fetch = require("node-fetch");
```

## Configuration and Setup

IEX Cloud uses a message weighting system to measure usage in message counts, make sure sandbox is enabled to `true` in development to avoid reaching data limits or overages. (Note: when enabling sandbox to true, the publishable key token is automatically prefixed with the letter T and doesn't require changing the existing token to access Test Data ) MAKE SURE PUBLIC KEY & NOT SECRET KEY IS BEING USED as it is prefixed with: `"pk_"`

```javascript
import { IEXCloudClient } from "node-iex-cloud";
import fetch from "node-fetch";

const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: "pk_21b4ffeccc6e3cnc1df07467a47231c6",
  version: "stable"
});
```

## Examples

The first method takes in a company symbol (an abbreviation used to uniquely identify publicly traded shares). The subsequent method retreive the specfic IEX data type.

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
// stock/aapl/cash-flow
iex
  .symbol("aapl")
  .cashFlow("annual", 3)
  .then(res => console.log(res));
```

```javascript
// stock/nflx/dividends
iex
  .symbol("nflx")
  .dividends("1mm")
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

### Forex / Currencies

```javascript
// stable/fx/convert?symbols=USDGPB,USDJPY&amount=2000&
iex
  .symbols("USDGPB", "USDJPY")
  .forex()
  .convert({ amount: 2000 })
  .then(res => console.log(res));

// stable/fx/historical?symbols=USDGPB,USDJPY&last=5
iex
  .symbols("USDGPB", "USDJPY")
  .forex()
  .historical({ last: 5 })
  .then(res => console.log(res));
```

### Available Methods

#### Stock

- `balanceSheet(period?)`
- `book`
- `chart(range?: string, params?: object)`
- `cashFlow(period?: string, last?: number)`
- `ceoCompensation`
- `company`
- `delayedQuote`
- `dividends(range?)`
- `earnings(last, field)`
- `estimates`
- `financials(period?: string)`
- `news(last?: number)`
- `fundOwnership`
- `income(period?: string, last?: number)`
- `insiderRoster`
- `insiderSummary`
- `insiderTransactions`
- `institutionalOwnership`
- `intradayPrices(params?: object)`
- `logo`
- `largestTrades`
- `options(expiration?: string, optionSide?: string)`
- `peers`
- `previous`
- `price`
- `priceTarget`
- `ohlc`
- `sentiment(type?: string, date?: string)`
- `quote(field: string)`
- `recommendationTrends`
- `stats(stat?: string)`
- `splits(range)`
- `shortInterest(date?: string)`
- `volumeByVenue`

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

To retreive a company's stock data using a company's full name, use the search method to search for the `companyName` then access the first index to grab the most relevant `symbol`

```javascript
// search/facebook
iex
  .search("facebook")
  .then(res => res)
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
iex
  .market()
  .todayEarnings()
  .then(res => console.log(res));

// stock/market/sector-performance
iex
  .market()
  .sectorPerformance()
  .then(res => console.log(res));
```

### Time Series

```javascript
// time-series/advanced_distribution
iex
  .symbols("AAPL", "GOOGL")
  .timeSeries()
  .advancedDistribution()
  .then(res => console.log(res));

iex
  .symbols("AAPL", "GOOGL")
  .timeSeries()
  .advancedReturnOnCapital()
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

Use the method `batch` to batch Request of multiple data types, all IEX types are supported. use the `range` method to return all request IEX allows only up to `10` types to be made per request.

```javascript
// stock/googl/batch?types=stock,company,balance-sheet,cash-flow,estimates&range=1m&last=4
iex
  .symbol("googl")
  .batch()
  .company()
  .price()
  .balanceSheet()
  .cashFlow()
  .estimates()
  .range("1m", 4)
  .then(res => console.log(res));
```

### Batch Symbols & Types

```javascript
// batch?symbols=googl,amzn,fb,aapl&types=company,balance-sheet,cash-flow,estimates&range=1m&last=4
iex
  .symbols("googl,amzn,fb,aapl")
  .batch()
  .company()
  .price()
  .balanceSheet()
  .cashFlow()
  .estimates()
  .range("1m", 4)
  .then(res => console.log(res));
```

### IEX Last

Last provides trade data for executions on IEX.

```javascript
// tops/last?symbols=aapl,googl,amzn
iex.tops("aapl", "googl", "amzn").then(res => console.log(res));
```

### IEX Stats

```javascript
// stats/intraday
iex
  .stats()
  .intraday()
  .then(res => console.log(res));

// stats/historical
iex
  .stats()
  .historical()
  .then(res => console.log(res));

// stats/records
iex
  .stats()
  .records()
  .then(res => console.log(res));
```

### IEX Market Info

```javascript
// stable/stock/market/sector-performance
iex
  .market()
  .sectorPerformance()
  .then(res => console.log(res));
```

### IEX Deep

DEEP is used to receive real-time depth of book quotations direct from IEX.

```javascript
// deep/trading-status?symbols=msft
iex
  .symbol("msft")
  .deep()
  .tradingStatus()
  .then(res => console.log(res));

// deep/book?symbols=msft
iex
  .symbol("msft")
  .deep()
  .book()
  .then(res => console.log(res));

// deep/trades?symbols=msf
iex
  .symbol("msft")
  .deep()
  .trades()
  .then(res => console.log(res));

// deep/trade-breaks?symbols=msft
iex
  .symbol("msft")
  .deep()
  .tradeBreaks()
  .then(res => console.log(res));
```

### SSE Streaming

Not Yet Supported

### Web Sockets

Coming Soon
