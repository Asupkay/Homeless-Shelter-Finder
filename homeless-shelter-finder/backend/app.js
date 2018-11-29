const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const configRoutes = require("./routes");

require('dotenv').config()
// const port = process.env.PORT || 3000;
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded());
configRoutes(app);

app.listen(3000, function() {
    console.log(
      "Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it"
    );
  
  });