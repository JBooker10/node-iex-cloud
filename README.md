# node-iex-cloud

## Installation

```bash
npm i node-iex-cloud
```

## Examples

```javascript
iex
  .symbol("googl")
  .financials()
  .then(res => console.log(res));
```
