const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = "8080";

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","*");
  res.setHeader("Access-Control-Allow-Headers","*");
  next();
});

app.use(express.json());

app.use((req, res, next) => {
  res.send("pakaya");
  next();
});

app.get("/tshirt", (req, res) => {
  res.status(200).send({ name: "pakaya" });
});

app.listen(PORT, () => {
  console.log("asd");
});
