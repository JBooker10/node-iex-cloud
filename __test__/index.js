const IEXCloud = require("../lib/app").IEXCloud;

const fetch = require("node-fetch");
require("dotenv").config();

const iex = new IEXCloud(fetch, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
});

iex
  .market()
  .collection({ param: "sector", collectionName: "mostactive" })
  .then(res => console.log(res));

// iex
//   .symbol("GOOGL")
//   .deep("book")
//   .then(res => console.log(res));
