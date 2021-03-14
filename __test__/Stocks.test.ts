import { IEXCloudClient } from "./../lib/index";
const fetch = require("node-fetch");
const axios = require("axios");
require("dotenv").config();
const config = require("./config");
const iex = new IEXCloudClient(fetch, config);

test("Error handling on axios", () => {
  const x = new IEXCloudClient(axios, config);
  return x
    .symbol("UnknownSymbol")
    .company()
    .catch(err => expect(err).toMatch("Unknown symbol"));
});

test("Error handling on node-fetch", () => {
  const x = new IEXCloudClient(fetch, config);
  return x
    .symbol("UnknownSymbol")
    .deep()
    .book()
    .catch(err => expect(err).toMatch("Unknown symbol"));
});

test("Unknown Symbol", () => {
  return iex
    .symbol("UnknownSymbol")
    .company()
    .catch(err => expect(err).toMatch("Unknown symbol"));
});

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
    .batch()
    .company()
    .balanceSheet()
    .cashFlow()
    .range("1m", 4)
    .then(res => expect(res).toHaveProperty("company.symbol"));
});

test("Batch Request and Symbols", () => {
  return iex
    .batchSymbols("googl, amzn, fb")
    .batch()
    .company()
    .balanceSheet()
    .cashFlow()
    .range()
    .then(res => expect(res).toHaveProperty("GOOGL"));
});

test("Batch Symbols Ceo Compensation", () => {
  return iex
    .symbols("googl, amzn, fb")
    .ceoCompensation()
    .then(res => expect(res).toHaveProperty("GOOGL"));
});

test("Batch Symbols Chart with params", () => {
  return iex
    .batchSymbols("aapl,amzn,fb")
    .chart("5d", { chartCloseOnly: true })
    .then(res => expect(res).toHaveProperty("AAPL"));
});

test("Crypto currencies quote", () => {
  return iex
    .crypto("btcusd")
    .quote()
    .then(res => expect(res).toHaveProperty("primaryExchange"));
});

test("Time Series Advanced Dividends", () => {
  return iex
    .symbol("AAPL")
    .timeSeries()
    .advancedDividends()
    .then(res => expect(Array.isArray(res)).toBe(true));
});

test("Forex Latest", () => {
  return iex
    .symbols("USDGPB", "USDJPY")
    .forex()
    .latest()
    .then(res => expect(Array.isArray(res)).toBe(true));
});

test("Forex Historical", () => {
  return iex
    .symbols("USDGPB", "USDJPY")
    .forex()
    .historical({ last: 5 })
    .then(res => expect(Array.isArray(res)).toBe(true));
});

test("Tops", () => {
  return iex.tops().then(res => expect(Array.isArray(res)).toBe(true));
});

test("Market Sector Performance", () => {
  return iex
    .market()
    .sectorPerformance()
    .then(res => expect(Array.isArray(res)).toBe(true));
});

test("Reference Data Exchanges", () => {
  return iex
    .refData()
    .exchanges()
    .then(res => expect(Array.isArray(res)).toBe(true));
});

test("Chart", () => {
  return iex
    .symbol("aapl")
    .chart("6m", {
      chartCloseOnly: true,
      chartSimplify: true,
      chartInterval: 2,
    })
    .then(res => expect(Array.isArray(res)).toBe(true));
});

test("Search By Company Name", () => {
  iex
    .search("facebook")
    .then(res => res)
    .then(res => iex.symbol(res[0].symbol).company())
    .then(res => expect(res).toHaveProperty("symbol"));
});
