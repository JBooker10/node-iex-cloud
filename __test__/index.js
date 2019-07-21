const IEX = require("../lib/index").IEXCloudClient;

const fetch = require("node-fetch");
require("dotenv").config();

const iex = new IEX(fetch, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
});

// iex
//   .symbol("googl")
//   .batch("company", "balance-sheet", "cash-flow", "estimates")
//   .then(res => console.log(res));

// iex
//   .symbol("GOOGL")
//   .ceoCompensation()
//   .then(res => console.log(res));

return iex.market("today-earnings").then(res => console.log(res));
