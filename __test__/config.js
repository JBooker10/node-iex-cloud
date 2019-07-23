require("dotenv").config();

module.exports = {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  version: "stable"
};
