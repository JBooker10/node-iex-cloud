const { IEXCloudClient } = require("./../lib");
const fetch = require("node-fetch");
require("dotenv").config();

const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
});

// iex
//   .symbol("googl")
//   .batch("company", "balance-sheet", "cash-flow", "estimates")
//   .then(res => console.log(res));

// iex.tops("aapl", "googl", "amzn").then(res => console.log(res));

iex.symbol("aapl").estimates.then(res => res);

// iex
//   .symbol("amzn")
//   .dividends("3m")
//   .then(res => console.log(res));

// iex.chart().then(res => console.log(res));

// iex.cashFlow("quarterly", { last: 1 }).then(res => console.log(res));

// iex.ceoCompensation().then(res => console.log(res));

// iex.delayedQuote().then(res => console.log(res));

// iex.earnings(1, { field: "" }).then(res => console.log(res));
