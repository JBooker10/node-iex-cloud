const { IEXCloudClient } = require("./../lib");
const axios = require("axios");

require("dotenv").config();

const iex = new IEXCloudClient(axios, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
});

// iex.market("list/mostactive").then(res => console.log(res));

iex.forex({ from: "EUR", to: "USD" }).then(res => console.log(res));

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

iex
  .search("international business machines")
  .then(res => iex.symbol(res[0].symbol).company())
  .then(res => console.log(res));
