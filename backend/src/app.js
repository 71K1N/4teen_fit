const autoroute = require("express-autoroute");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const baseDir = path.join(__dirname, "./controller");
app.use(cors());
app.use(bodyParser.json());
autoroute(app, {
  throwErrors: false,
  logger: require("winston"),
  routesDir: baseDir
});
module.exports = app;