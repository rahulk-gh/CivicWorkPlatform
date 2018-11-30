const express = require("express");
const logger = require('morgan'); //Logs AJAX Calls
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));

// Configure body parsing for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CivicWorkPlatform",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.listen(PORT, () =>
  console.log(`🌎  ==> Civic Work Platform Server is now listening on PORT ${PORT}!`)
);
