const bodyParser = require("body-parser");
const express = require("express");
const APIManager = require("./apiManager");
const staticRoutes = require("./Routes/static");
const path = require("path");

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
const uu = {};

const data = {
  data: [
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
    },
  ],
};
app.get("/*", async (req, res, next) => {
  const userUrl = req.url.replace("/", "");
  const urlInfo = await getTheRout(userUrl);
  let renderFile = "404";
  let renderDetails = {};
  if (req.url == "/") {
    renderDetails = data;
    renderFile = "index";
  } else if (urlInfo == "db_error") {
    return res.send("API connection error");
  } else if (userUrl.startsWith("static")) {
    const staticPath = userUrl.replace("static/", "");
    if (staticPath == "style.css") {
      res.sendFile(path.join(__dirname, "./", "content/static", "style.css"));
    } else if (staticPath == "output.css") {
      res.sendFile(path.join(__dirname, "./", "content/static", "output.css"));
    } else {
      return res.sendStatus(404);
    }
    return;
  } else if (urlInfo == "404") {
    return res.sendStatus(404);
  } else if (urlInfo == "posts") {
    renderDetails = await generatePost(userUrl);
    renderFile = "post";
    console.log(renderDetails);
  }
  res.status(200).render(renderFile, renderDetails);

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
  }
  if (slugRes.type) {
    return slugRes.type;
  } else {
    return slugRes;
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

  const commentsOnThePost = await manageAPI.sendGet(
    `{getCommentsOfPost(slug:"${slug}"){content, username, date}}`,
    "getCommentsOfPost"
  );
  postData.labels = postLabels;
  postData.authors = postAuthors;
  postData.comments = commentsOnThePost;

  return postData;
};

const searchSlug = async (slug) => {
  return await manageAPI.sendGet(
    `{searchSlugs(keywords:"${slug}"){type, slug}}`,
    "searchSlugs"
  );
};
