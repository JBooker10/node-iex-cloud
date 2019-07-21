# node-iex-cloud

## Installation

```bash
npm i node-iex-cloud
```

```javascript
import IEX from "node-iex-cloud";
```

## Configuration and Setup

IEX Cloud uses a message weighting system to measure usage in message counts, make sure sandbox is enabled to `true` in development to avoid reaching data limit or overages.
(Note: when enabling sandbox to `true`, the publishable key token is automatically prefixed with the letter `T` and doesn't require editing the existing token to access Test Data )

```javascript
const iex = new IEX(fetch, {
  sandbox: true,
  publishable: "pk_21b4ffeccc6e3cnc1df07467a47231c6",
  version: "stable"
});
```

## Examples

The first method takes in a company symbol (an abbreviation used to uniquely identify publicly traded shares). The subequent method retreive the specfic IEX data type.

### Stocks

```javascript
iex
  // stock/google/financials?period=annual
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

### Market

```javascript
// stock/market/today-earnings
iex.market("today-earnings").then(res => console.log(res));
```

### Batching

Use the method `batch` to batch Request of multiple data types, all IEX types are supported. IEX allows only up to `10` types to be made per request.

```javascript
iex
  // stock/googl/batch?types=stock,company,balance-sheet,cash-flow,estimates
  .symbol("googl")
  .batch("company", "balance-sheet", "cash-flow", "estimates")
  .then(res => console.log(res));
```

### Historical Stats

```javascript
// stats/intraday
iex.historicalStats("intraday").then(res => console.log(res));
```

### Websockets

Comming soon
