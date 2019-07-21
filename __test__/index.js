const Client = require("../lib/app").IEXCloudClient;
const IEXCloud = require("../lib/app").IEXCloud;

const fetch = require("node-fetch");
require("dotenv").config();

const iex = new IEXCloud(fetch, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
});

iex
  .symbol("GOOGL")
  .dividends()
  .then(res => console.log(res));
