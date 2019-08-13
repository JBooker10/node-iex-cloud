const { IEXCloudClient } = require("./../lib");
const fetch = require("node-fetch");
require("dotenv").config();

const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
});

iex.market("list/mostactive").then(res => console.log(res));

iex
  .symbol("googl")
  .company()
  .then(res => console.log(res));

iex
  .symbols("googl,amzn,fb")
  .price()
  .then(res => console.log(res));

iex.historicalStats("recent").then(res => console.log(res));

iex
  .symbol("AAPL")
  .recommendationTrends()
  .then(res => console.log(res));

iex.tops("aapl", "googl", "amzn").then(res => console.log(res));
