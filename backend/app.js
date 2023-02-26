const bodyParser = require("body-parser");
const express = require("express");
const APIManager = require("./apiManager");
const staticRoutes = require("./Routes/static");

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
app.get("/static/", staticRoutes);

/*
app.get("/*", async (req, res, next) => {
  const userUrl = req.url.replace("/", "");
  const urlInfo = await getTheRout(userUrl);
  let renderFile = "404";
  let renderDetails = {};
  if (urlInfo == "404") {
    return res.sendStatus(404);
  } else if (urlInfo == "posts") {
    renderDetails = await generatePost(userUrl);
    renderFile = "post";
    console.log(renderDetails);
  }
  res.status(200).render(renderFile, renderDetails);

  next();
});
*/
app.listen(PORT, async () => {
  console.log("Server fired up!");
});

const getTheRout = async (route) => {
  let type;
  const slugRes = await searchSlug(route);
  if (!slugRes) {
    return "404";
  }
  return slugRes.type;
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
  return postData;
};

const searchSlug = async (slug) => {
  return await manageAPI.sendGet(
    `{searchSlugs(keywords:"${slug}"){type, slug}}`,
    "searchSlugs"
  );
};
