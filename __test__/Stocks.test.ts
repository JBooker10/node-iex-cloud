import { IEXCloudClient } from "./../src";
const fetch = require("node-fetch");

const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: "pk_73b4feeccc8e4c6c8de07477a47181a6",
  version: "stable"
});

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

test("Chart data", () => {
  return iex
    .symbol("AAPL")
    .chart()
    .then(res => expect(res[0]).toHaveProperty("open"));
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

test("Today Earnings Data", () => {
  return iex
    .market("today-earnings")
    .then(res => expect(res).toHaveProperty("amc"));
});

test("Upcoming Earnings Data", () => {
  return iex
    .market("upcoming-earnings")
    .then(res => expect(res[0]).toHaveProperty("symbol"));
});
