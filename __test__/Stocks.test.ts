import IEXCloud from "./../src/stocks";
import fetch from "node-fetch";
require("dotenv").config();
// import * as dotenv from "dotenv";

// console.log(dotenv);
// dotenv.config();

const iex = new IEXCloud(fetch, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
});

test("Fetch Company data", () => {
  return iex
    .symbol("AAPL")
    .company()
    .then(res => expect(res).toHaveProperty("symbol"));
});

test("Fetch Book data", () => {
  return iex
    .symbol("AAPL")
    .book()
    .then(res => expect(res).toHaveProperty("quote"));
});

test("Fetch Balance Sheet data", () => {
  return iex
    .symbol("AAPL")
    .balanceSheet()
    .then(res => expect(res).toHaveProperty("balancesheet"));
});

test("Fetch Chart data", () => {
  return iex
    .symbol("AAPL")
    .chart()
    .then(res => expect(res[0]).toHaveProperty("open"));
});
