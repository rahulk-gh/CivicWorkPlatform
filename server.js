const express = require("express");
const logger = require('morgan'); //Logs AJAX Calls
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(routes);

// Configure body parsing for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* ////////////////////////////////////////////////Production///////////////////////////////////////
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
*/
/////////////////////////////////Development/////////////////////////////////////////////////////
app.use(express.static("citizen/build"));
//END OF DEVELOPMENT

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
