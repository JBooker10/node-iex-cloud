const { IEXCloudClient } = require("./../lib");
const fetch = require("node-fetch");
require("dotenv").config();

const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  test: process.env.TEST,
  version: "stable"
});

iex.market("list/mostactive").then(res => console.log(res));

// iex
//   .symbol("googl")
//   .batch("company", "balance-sheet", "cash-flow", "estimates")
//   .then(res => console.log(res));

// iex.tops("aapl", "googl", "amzn").then(res => console.log(res));

// iex.symbol("aapl").estimates.then(res => res);
