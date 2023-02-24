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
  console.log(
    await manageAPI.sendGet(
      `{getFullPost(slug:"${slug}"){slug, title, content,date{fullDate},author{name,auth_id},images{header},status}}`,
      "getFullPost"
    )
  );
};

const searchSlug = async (slug) => {
  return await manageAPI.sendGet(
    `{searchSlugs(keywords:"${slug}"){type, slug}}`,
    "searchSlugs"
  );
};
