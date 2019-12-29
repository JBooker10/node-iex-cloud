const { IEXCloudClient } = require("./../lib");
const axios = require("axios");

require("dotenv").config();

const iex = new IEXCloudClient(axios, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
});




// iex 
// .symbol("AAPL")
// .book()
// .then(res => console.log(res))

// iex.market().sectorPerformance().then(res => console.log(res))

// iex.forex().convert().then(res => console.log(res))

// iex.forex().historical({ symbols: ["EURUSD","GBPUSD"]}).then(res => console.log(res))

iex.symbols("googl, amzn, fb")
.ceoCompensation()
.then(res => console.log(res));


iex.refData().tags().then(res => console.log(res))




// console.log("hello")

// iex.forex().convert({ "btcusd", "ethusd" }).then(res => console.log(res))


// iex
// .crypto("bchusd")
// .book()
// .then(res => console.log(res))

