const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const configRoutes = require("./routes");

require('dotenv').config();

app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '../frontend/build')));
configRoutes(app);


app.listen(port, function() {
  console.log(
    "Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it"
  );
});
