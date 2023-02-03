const databse = require("./dbManager");
const graphQL = require("./graph");
const bodyParser = require("body-parser");

const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const mongoUSER = "bartyslr";
const mongoPass = "W4MZeyrsSEFJnilc";
const mongoURI = `mongodb+srv://${mongoUSER}:${mongoPass}@cluster69.7tz3qnk.mongodb.net/?retryWrites=true&w=majority`;
const dbName = "temp";
const collectionMongo = "blog1";

const dbConnection = new databse.dbMan(collectionMongo, dbName);

const app = express();
const PORT = "80";

const root = {
  getFullPost: () => {
    return bloggPost;
  },
  getAllFullPosts: () => {
    const yy = readDataHandler();
    return [yy];
  },
  fkMe: () => {
    return 1;
  },
  getPostImgs: () => {
    return bloggPost.images;
  },
  addNewPost: (slug, title, content, labels, date, author, images) => {
    writeDataHandler(slug, title, content, labels, date, author, images);
  },
};

/*
app.get("/tshirt", (req, res) => {
  res.status(200).send({ name: "pky" });
});
*/

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(
  "/1",
  graphqlHTTP({
    schema: graphQL.schema,
    rootValue: root,
    graphiql: true,
  })
);

async function readDataHandler() {
  const yy = await dbConnection.readData();
  return yy;
}

async function writeDataHandler(
  slug,
  title,
  content,
  labels,
  date,
  author,
  images
) {
  const blogPost = { ...graphQL.blogPost };
  blogPost.slug = slug;
  blogPost.title = title;
  blogPost.content = content;
  blogPost.labels = labels;
  blogPost.date = date;
  blogPost.author = author;
  blogPost.images = images;
  const yy = await dbConnection.writeData(blogPost);

  return yy;
}

app.listen(PORT, () => {
  console.log("Server fired up!");
});
