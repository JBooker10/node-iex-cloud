const { IEXCloudClient } = require("./../lib");
const axios = require("axios");

require("dotenv").config();

const iex = new IEXCloudClient(axios, {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
});



iex.crypto("bchusd").book().then(res => console.log(res))

