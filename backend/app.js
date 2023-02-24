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

app.set("view engine", "ejs");
app.set("views", "content");

app.get("/*", async (req, res, next) => {
  const userUrl = req.url.replace("/", "");
  const isSluValid = await getTheRout(userUrl);
  console.log(isSluValid);
  if (isSluValid == "404") {
    return res.sendStatus(404);
  }
  next();
});

app.listen(PORT, async () => {
  console.log("Server fired up!");
});

const getTheRout = async (route) => {
  let type;
  const slugRes = await searchSlug(route);
  if (!slugRes) {
    return "404";
  } else {
    generatePost(route);
  }
};

const generatePost = async (slug) => {
  const postData = await manageAPI.sendGet(
    `{getFullPost(slug:"${slug}"){slug, title, content,date{fullDate},images{header},status}}`,
    "getFullPost"
  );
  const postLabels = await manageAPI.sendGet(
    `{getLabelsOfPost(slug:"${slug}")}`,
    "getLabelsOfPost"
  );
  const postAuthors = await manageAPI.sendGet(
    `{getAuthsOfPost(slug:"${slug}"){displayName, username}}`,
    "getAuthsOfPost"
  );
  postData.labels = postLabels;
  postData.authors = postAuthors;
  console.log(postData);
};

const searchSlug = async (slug) => {
  return await manageAPI.sendGet(
    `{searchSlugs(keywords:"${slug}"){type, slug}}`,
    "searchSlugs"
  );
};
