# node-iex-cloud

## Installation

```bash
npm i node-iex-cloud
```

### Configuration

API endpoints defaults to production, to enable sandbox set property equal to true

```javascript
const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: "pk_21b4ffeccc6e3cnc1df07467a47231c6",
  version: "stable"
});
```

## Examples

`/stock/googl/financials`
`/stock/aapl/financials?period=annual`

```javascript
iex
  .symbol("googl")
  .financials("quarterly")
  .then(res => console.log(res));
```
