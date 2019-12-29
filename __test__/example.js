const { IEXCloudClient } = require("./../lib");
const axios = require("axios");

require("dotenv").config();

const iex = new IEXCloudClient(axios, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
});


// iex.symbols("USDGPB", "USDJPY")
//     .forex()
//     .convert({ amount: 2000 })
//     .then(res => console.log(res))


// iex.symbols("USDGPB", "USDJPY")
//    .forex()
//    .historical({ last: 5 })
//    .then(res => console.log(res))


iex.market().sectorPerformance().then(res => console.log(res))