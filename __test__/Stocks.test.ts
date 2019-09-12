import { IEXCloudClient } from "./../lib/index";
const fetch = require("node-fetch");
require("dotenv").config();
const config = require("./config");
const iex = new IEXCloudClient(fetch, config);

test("Company", () => {
  return iex
    .symbol("AAPL")
    .company()
    .then(res => expect(res).toHaveProperty("symbol"));
});

test("Book", () => {
  return iex
    .symbol("AAPL")
    .book()
    .then(res => expect(res).toHaveProperty("quote"));
});

test("Balance Sheet", () => {
  return iex
    .symbol("AAPL")
    .balanceSheet("quarterly")
    .then(res => expect(res).toHaveProperty("balancesheet"));
});

test("Deep Data", () => {
  return iex
    .symbol("AAPL")
    .deep("book")
    .then(res => expect(res).toMatchObject({}));
});

test("Ceo Compensation", () => {
  return iex
    .symbol("AAPL")
    .ceoCompensation()
    .then(res => expect(res).toHaveProperty("symbol"));
});

test("Batch Request", () => {
  return iex
    .symbol("googl")
    .batch("company", "balance-sheet", "cash-flow", "estimates")
    .then(res => expect(res).toHaveProperty("company.symbol"));
});

test.skip("Today Earnings", () => {
  return iex
    .symbol("googl")
    .market("today-earnings")
    .then(res => expect(res).toHaveProperty("amc"));
});

test("Estimates", () => {
  return iex
    .symbol("googl")
    .estimates()
    .then(res => expect(res).toHaveProperty("symbol"));
});

test("Batch Request and Symbols", () => {
  return iex
    .symbols("googl, amzn, fb")
    .batch("company", "balance-sheet", "cash-flow", "estimates")
    .then(res => expect(res).toHaveProperty("GOOGL"));
});

test("Batch Symbols Ceo Compensation", () => {
  return iex
    .symbols("googl, amzn, fb")
    .ceoCompensation()
    .then(res => expect(res).toHaveProperty("GOOGL"));
});

test("Crypto currencies quote", () => {
  return iex
    .crypto("btcusd")
    .quote()
    .then(res => expect(res).toHaveProperty("primaryExchange"));
});
