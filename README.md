# node-iex-cloud

## Installation

```bash
npm i node-iex-cloud
```

## Configuration and Setup

IEX Cloud uses a message weighting system to measure usage in message counts, make sure sandbox is enabled to `true` in development to avoid reaching data limit or overages.
(Note: when enabling sandbox to `true`, the publishable key token is automatically prefixed with the letter `T` and doesn't require editing the existing token to access Test Data )

```javascript
const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: "pk_21b4ffeccc6e3cnc1df07467a47231c6",
  version: "stable"
});
```

## Examples

The first method takes in a company symbol (an abbreviation used to uniquely identify publicly traded shares). The subequent method retreive the specfic IEX data type.

`/stock/google/financials?period=annual`

### Stocks

```javascript
iex
  .symbol("googl")
  .financials("quarterly")
  .then(res => console.log(res));
```

`/stock/googl/ceo-compensation`

```javascript
iex
  .symbol("googl")
  .ceoCompensation()
  .then(res => console.log(res));
```

### Historical Stats

```javascript
// /stats/intraday
iex.historicalStats("intraday").then(res => console.log(res));
```
