const databse = require("./dbManager");
const graphQL = require("./graph");
const bodyParser = require("body-parser");
const pswManagement = require("./pswMgmt");
const { generateAccessToken, authenticateToken } = require("./authUser");

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
  searchPosts: async (args) => {
    return await searchDb(
      "posts",
      args.keywords,
      ["title", "slug"],
      "images",
      "slug",
      "title"
    );
  },

  getFullPost: async (args) => {
    return await getFullSingle("posts", args.slug);
  },
  getFullPage: async (args) => {
    return await getFullSingle("pages", args.slug);
  },
  getAllFullPosts: async () => {
    return await readAllCollections("posts");
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
  registerUser: async () => {
    return await countCollection("posts");
  },
  getCountPosts: async () => {
    return await countCollection("posts");
  },
  getCountComments: async (args) => {
    return await countCollection("comments", { slug: args.slug });
  },
  countAllComments: async () => {
    return await countCollection("comments");
  },
  getLabelCount: async (args) => {
    return await countCollection("labels", { slug: args.label });
  },
  getAuthorCount: async (args) => {
    return await countCollection("authors");
  },
  getCountPages: async () => {
    return await countCollection("pages");
  },
  getPostCountByYear: async (args) => {
    return await countCollection("posts", { year: args.year });
  },
  getAllSlugs: async () => {
    return await readAllSlugs();
  },
  getPostsWithThumb: async () => {
    return await getSemiPosts("posts");
  },
  getPagesWithThumb: async () => {
    return await getSemiPosts("pages");
  },
  getAllComments: async () => {
    return await readAllCollections("comments");
  },
  getAllLabels: async () => {
    return await readAllCollections("labels");
  },
  getAllAuthors: async () => {
    return await readAllCollections("authors");
  },
  getAllFullPages: async () => {
    return await readAllCollections("pages");
  },
  getPostsOfLabel: async (args) => {
    return await getJoins("labels", "name", args.label, "posts");
  },
  getSemiPostsWithState: async (args) => {
    return await getSemiPosts("posts", { state: args.state });
  },
  getPostsbyAuthor: async (args) => {
    return await getJoins("authors", "name", args.username, "posts");
  },

  getRelatedPosts: async (args) => {
    let relatedPosts = [];
    const postLabels = await getPostAttributes(args.post, "labels");
    for (const label of postLabels) {
      relatedPosts.push(await getJoins("labels", "name", label.name, "posts"));
    }
    return relatedPosts;
  },
  getPostsByYear: async (args) => {
    return await getSemiPosts("posts", { year: args.year });
  },
  deletePost: async (args) => {
    return await deleteItm("posts", { slug: args.slug });
  },
  deleteLabel: async (args) => {
    return await deleteItm("labels", { name: args.label });
  },
  deleteAuthor: async (args) => {
    return await deleteItm("authors", { name: args.username });
  },
  deleteLabel: async (args) => {
    return await deleteItm("authors", { name: args.username });
  },
  editPost: async (args) => {
    const argKeys = Object.keys(args);
    const providedArgs = argKeys.filter((key) => args[key] !== undefined);
    const result = {};
    providedArgs.forEach((key) => (result[key] = args[key]));

    return await updateItmPartially("posts", { slug: args.oldSlug }, result);
  },
  chnageUsrPass: async (args) => {
    return await pswStore(args.newPass, args.mail);
  },
  changePostStatus: async (args) => {
    const providedArgs = ["published", "draft", "trash"].filter(
      (key) => key === args.status
    );
    if (providedArgs) {
      return await updateItmPartially(
        "posts",
        { slug: args.slug },
        { state: args.status }
      );
    }
  },
};

const contextUser = {
  email: null,
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

app.use("/auth", (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  const usr = authenticateToken(token);
  if (usr) {
    contextUser.email = usr;
  }
  next()
});

app.use(
  "/1",
  graphqlHTTP({
    schema: graphQL.schema,
    rootValue: root,
    graphiql: true,
    context: contextUser,
  })
);

async function validateUsr() {}

async function signinUsr(plainPass, email) {
  const passTrue = await pswValidate(plainPass, email);
  if (!passTrue) {
    return null;
  }
  generateAccessToken(email);
  contextUser.email = email;
}

async function pswValidate(plainPass, email) {
  await dbConnection.chnageCollection("authors");
  const yy = await dbConnection.readData({ email: email }, "password");
  return await pswManagement.validatePass(plainPass, yy[0]["password"]);
}
async function pswStore(plainPass, email) {
  const pass = await pswManagement.hashNewPass(plainPass);
  console.log({ password: pass[0] });
  await dbConnection.chnageCollection("authors");
  const yy = await dbConnection.updatePartially("email", email, {
    password: pass[0],
    salt: pass[1],
  });
  return yy;
}

async function deleteItm(type, query) {
  await dbConnection.chnageCollection(type);
  const yy = await dbConnection.deleteSingle(query);
  return yy;
}
async function updateItm(type, query, newData) {
  await dbConnection.chnageCollection(type);
  const yy = await dbConnection.updateData(query, newData);
  return yy;
}
async function updateItmPartially(type, key, val, newstuff) {
  await dbConnection.chnageCollection(type);
  const yy = await dbConnection.updatePartially(key, val, newstuff);
  return yy;
}
async function pushNewItems(type, key, val, newstuff) {
  const enteredKey = Object.keys(newstuff)[0];
  await dbConnection.chnageCollection(type);
  const yy = await dbConnection.pushNewItem(
    key,
    val,
    enteredKey,
    newstuff[enteredKey]
  );
  return yy;
}

async function getPostAttributes(post, attribute) {
  await dbConnection.chnageCollection(attribute);
  const yy = await dbConnection.search("slugs", post, "name");
  return yy;
}
async function readAllCollections(collection) {
  await dbConnection.chnageCollection(collection);
  const yy = await dbConnection.readData();
  return yy;
}
async function readAllSlugs() {
  await dbConnection.chnageCollection("slugs");
  const yy = await dbConnection.readData();
  return yy;
}

async function getFullSingle(type, slug) {
  await dbConnection.chnageCollection(type);
  const yy = await dbConnection.readDataSingle({ slug: slug });
  return yy;
}

async function getSemiPosts(type, query = null) {
  await dbConnection.chnageCollection(type);
  const yy = await dbConnection.readData(query, "images", "slug", "title");
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

  //await dbConnection.chnageCollection("labels");
  for (const _ in labels) {
    await pushNewItems("labels", "name", _, { slugs: slug });
  }

  //await dbConnection.chnageCollection("authors");
  await pushNewItems("authors", "name", author, { slugs: slug });

  return yy[0];
}

async function countCollection(collection, search) {
  let yy = 0;
  if (search) {
    await dbConnection.chnageCollection(collection);
    const temps = await dbConnection.countQuery(search);
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
  //console.log(yy);
}

async function getJoins(
  collection1,
  firstQueryKey,
  firstQueryValue,
  collection2
) {
  await dbConnection.chnageCollection(collection1);
  const firstQueryResults = await dbConnection.search(
    firstQueryKey,
    firstQueryValue
  );
  const allFound = [];
  if (firstQueryResults[0].slugs) {
    for (const res1 of firstQueryResults[0].slugs) {
      const post1 = await getSemiPosts(collection2, { slug: res1 });
      if (post1[0]) {
        allFound.push(post1[0]);
      }
    }
  }
  return allFound;
}

async function searchDb(collection, keyword, keys, ...returnValues) {
  await dbConnection.chnageCollection(collection);
  let searchResult = [];
  if (keys) {
    for (const key of keys) {
      const results = await dbConnection.search(key, keyword, ...returnValues);
      if (results) {
        for (const result of results) {
          if (!searchResult.find((res) => result === res)) {
            //continue;
            console.log(searchResult.find((res) => result === res));
            searchResult = searchResult.concat(result);
          }
        }
      }
    }
  }
  return searchResult;
}

async function tstFn() {
  const uu = await pswStore("xyz", "admin@admin.lk");
  console.log(uu);
}
//tstFn();

app.listen(PORT, () => {
  console.log("Server fired up!");
});
