const bodyParser = require("body-parser");
const express = require("express");
const APIManager = require("./apiManager");

const app = express();
const PORT = 8080;

const api_url = "http://127.0.0.1/graph";
const manageAPI = new APIManager(api_url);

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

slugs = ["asd", "qwert", "123"];

app.set("view engine", "ejs");
app.set("views", "content");

app.get("/*", async (req, res, next) => {
  const userUrl = req.url.replace("/", "");
  const getGeneratedPost = await getTheRout(userUrl);
  res.render(getGeneratedPost.file, getGeneratedPost.content);
  next();
});

app.listen(PORT, () => {
  console.log("Server fired up!");
});

const getTheRout = async (route, slugs) => {
  if (!slugs.includes(route)) {
    return;
  }
  return await generatePost(route);
};

const generatePost = async (slug) => {
  console.log(await manageAPI.sendGet("{getAllFullPosts{title}}", "getAllFullPosts"));
};

generatePost("kl");
