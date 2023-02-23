const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const PORT = 80;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

slugs = ["asd", "qwert", "123"];

app.get("/*", (req, res, next) => {
  const userUrl = req.url;

  next();
});

app.listen(PORT, () => {
  console.log("Server fired up!");
});

const getTheRout = (route, slugs) => {
  if (!slugs.includes(route)) {
    return;
  }
  
};
