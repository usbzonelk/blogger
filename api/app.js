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
  getFullPost: async (args) => {
    return await getFullPost(args.slug);
  },
  getAllFullPosts: async () => {
    return await readAllPosts();
  },

  addNewPost: async (args) => {
    await writeNewPost(
      args.slug,
      args.title,
      args.content,
      args.labels,
      args.date,
      args.author,
      args.images,
      args.status
    );
  },
  getCountPosts: async () => {
    return await countTotal("posts");
  },
  getCountComments: async (args) => {
    return await countCollection("comments", args.slug);
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

async function readAllPosts() {
  await dbConnection.chnageCollection("posts");
  const yy = await dbConnection.readData();
  return yy;
}

async function getFullPost(slug) {
  await dbConnection.chnageCollection("posts");
  const yy = await dbConnection.readDataSingle({ slug: slug });
  return yy;
}

async function writeNewPost(
  slug,
  title,
  content,
  labels,
  date,
  author,
  images,
  status
) {
  const blogPost = { ...graphQL.blogPost };
  blogPost.slug = slug;
  blogPost.title = title;
  blogPost.content = content;
  blogPost.date = date;
  if (status) {
    blogPost.status = status;
  }
  blogPost.images = images;
  await dbConnection.chnageCollection("posts");
  const yy = await dbConnection.writeData(blogPost);

  blogPost.labels = labels;
  await dbConnection.chnageCollection("labels");
  for (const _ in labels) {
    await dbConnection.writeData(_);
  }

  return yy[0];
}

async function countCollection(collection, slug) {
  let yy = 0;
  if (slug) {
    await dbConnection.chnageCollection(collection);
    const temps = await dbConnection.countQuery({ slug: slug });
    if (temps) {
      yy = temps;
    }
  } else {
    await dbConnection.chnageCollection(collection);
    const temps = await dbConnection.countTotal();
    if (temps) {
      yy = temps;
    }
  }
  return yy;
}

async function tstFn() {
  await dbConnection.chnageCollection("posts");
  const uu = await dbConnection.search("slug","qwe", "date","labels")
  console.log(uu);
}
//tstFn();

app.listen(PORT, () => {
  console.log("Server fired up!");
});
