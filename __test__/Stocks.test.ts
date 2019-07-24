import { IEXCloudClient } from "./../lib/index";
const fetch = require("node-fetch");
require("dotenv").config();
const config = require("./config");

const iex = new IEXCloudClient(fetch, config);

test("Company Data", () => {
  return iex
    .symbol("AAPL")
    .company()
    .then(res => expect(res).toHaveProperty("symbol"));
});

test("Book Data", () => {
  return iex
    .symbol("AAPL")
    .book()
    .then(res => expect(res).toHaveProperty("quote"));
});

test("Balance Sheet Data", () => {
  return iex
    .symbol("AAPL")
    .balanceSheet()
    .then(res => expect(res).toHaveProperty("balancesheet"));
});

test("Deep Data", () => {
  return iex
    .symbol("AAPL")
    .deep("book")
    .then(res => expect(res).toMatchObject({}));
});

test("Ceo Compensation Data", () => {
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

// test("Today Earnings Data", () => {
//   return iex
//     .market("today-earnings")
//     .then(res => expect(res).toHaveProperty("amc"));
// });

test("Earnings Data", () => {
  return iex
    .symbol("aapl")
    .earnings(1, { field: "" })
    .then(res => expect(res).toHaveProperty("earnings"));
});
