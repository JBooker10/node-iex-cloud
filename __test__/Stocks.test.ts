import { IEXCloudClient } from "./../lib/index";
const fetch = require("node-fetch");
require("dotenv").config();
const config = require("./config");
const iex = new IEXCloudClient(fetch, config);

test("Company", () => {
  return iex
    .symbol("GOOGL")
    .company()
    .then(res => expect(res).toHaveProperty("companyName"));
});

test("Book", () => {
  return iex
    .symbol("AAPL")
    .book()
    .then(res => expect(res).toHaveProperty("quote"));
});

test("Balance Sheet", () => {
  return iex
    .symbol("FB")
    .balanceSheet("quarterly")
    .then(res => expect(res).toHaveProperty("balancesheet"));
});

test("Deep Data", () => {
  return iex
    .symbol("MSFT")
    .deep()
    .book()
    .then(res => expect(res).toMatchObject({}));
});

test("Ceo Compensation", () => {
  return iex
    .symbol("NFLX")
    .ceoCompensation()
    .then(res => expect(res).toHaveProperty("salary"));
});

test("Batch Request", () => {
  return iex
    .symbol("googl")
    .batch("company", "balance-sheet", "cash-flow", "estimates")
    .then(res => expect(res).toHaveProperty("company.symbol"));
});

test("Estimates", () => {
  return iex
    .symbol("googl")
    .estimates()
    .then(res => expect(res).toHaveProperty("estimates"));
});

test("Batch Request and Symbols", () => {
  return iex
    .symbols("googl, amzn, fb")
    .batch("company", "news", "cash-flow", "logo")
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

test("Time Series Advanced Dividends", () => {
  return iex.symbol("AAPL")
   .timeSeries()
   .advancedDividends()
   .then(res => expect(Array.isArray(res)).toBe(true))
});

test("Forex Latest", () => {
  return iex.symbols("USDGPB", "USDJPY")
   .forex()
   .latest()
   .then(res => expect(Array.isArray(res)).toBe(true))
});

test("Forex Historical", () => {
  return iex.symbols("USDGPB", "USDJPY")
   .forex()
   .historical({ last: 5 })
   .then(res => expect(Array.isArray(res)).toBe(true))
});

test("Tops", () => {
  return iex.tops().then(res => expect(Array.isArray(res)).toBe(true))
});

test("Market Sector Performance", () => {
  return iex.market().sectorPerformance().then(res => expect(Array.isArray(res)).toBe(true))
});


