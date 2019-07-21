import IEXCloud from "./../src/stocks";
const fetch = require("node-fetch");
require("dotenv").config();

const iex = new IEXCloud(fetch, {
  sandbox: true,
  publishable: "pk_73b4feeccc8e4c6c8de07477a47181a6",
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

test("Fetch Chart data", () => {
  return iex
    .symbol("AAPL")
    .deep()
    .then(res => expect(res[0]).toHaveProperty("open"));
});
