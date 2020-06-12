const { IEXCloudClient } = require("./../lib");

const axios = require("axios");

require("dotenv").config();

const iex = new IEXCloudClient(axios, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable",
});

iex
  .symbols("AAPL", "GOOGL")
  .book()
  .then(res => console.log(res));

iex
  .symbol("aapl")
  .batch()
  .book()
  .chart()
  .sentiment()
  .range()
  .then(res => console.log(res));

iex
  .symbol("AAPL")
  .book()
  .then(res => console.log(res));

iex
  .refData()
  .exchanges()
  .then(res => console.log(res));

iex
  .symbol("aapl")
  .chart("6m", { chartCloseOnly: true, chartSimplify: true, chartInterval: 2 })
  .then(res => console.log(res));

iex
  .search("facebook")
  .then(res => res)
  .then(res => iex.symbol(res[0].symbol).company())
  .then(res => console.log(res));

iex
  .symbols("USDGPB", "USDJPY")
  .forex()
  .convert({ amount: 2000 })
  .then(res => console.log(res));

iex
  .symbols("USDGPB", "USDJPY")
  .forex()
  .historical({ last: 5 })
  .then(res => console.log(res));

iex
  .market()
  .todayEarnings()
  .then(res => console.log(res));

iex
  .stats()
  .records()
  .then(res => console.log(res));

iex
  .market()
  .sectorPerformance()
  .then(res => console.log(res));

iex.symbols("AAPL", "GOOGL").timeSeries().advancedReturnOnCapital();

iex
  .symbol("AAPL")
  .quote("lastestPrice")
  .then(res => console.log(res));

iex
  .symbol("AAPL")
  .cashFlow("annual", 3)
  .then(res => console.log(res));
