require("dotenv").config();

module.exports = {
  sandbox: true,
  publishable: process.env.PUBLISHABLE,
  test: process.env.TEST,
  version: "stable"
};
