const { APPCENTER } = require("ci-info");
const express = require("express");
const Pizza = require("./client/models/pizzaModel");

const db = require("./db");

const app = express();

app.use(express.json());

const pizzasRoute = require ('./client/routes/pizzasRoute')

app.use('/api/pizzas/', pizzasRoute)

app.get("/", (req, res) => {
  res.send("server working" + port);
});


app.use('/api/pizzas/', pizzasRoute)

const port = process.env.PORT || 8000;
app.listen(port, () => "server running on port port");
