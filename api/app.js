const databse = require("./dbManager");

const mongoUSER = "bartyslr";
const mongoPass = "W4MZeyrsSEFJnilc";
const mongoURI = `mongodb+srv://${mongoUSER}:${mongoPass}@cluster69.7tz3qnk.mongodb.net/?retryWrites=true&w=majority`;
const dbName = "sample_mflix";
const collectionMongo = "movies";

const dbConnection = new databse.dbMan(collectionMongo, dbName);
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = "8080";

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});


app.get("/tshirt", (req, res) => {
  res.status(200).send({ name: "pky" });
});

app.listen(PORT, () => {
  console.log("Server fired up!");
});

async function readDataHandler(query) {
  const yy = await dbConnection.readData(query);
  console.log(yy);
}
readDataHandler({ directors: "Barbra Streisand" });
