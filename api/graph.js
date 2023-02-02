const express = require("express");
const bodyParser = require("body-parser");

const { graphqlHTTP } = require("express-graphql");
const { buildSchema, GraphQLScalarType } = require("graphql");

const schema = buildSchema(`
  type Author{
  name: String
  }

  type Images{
    header: String
    imgs: [String]
  }
  
  type BlogPost {

    slug: String
    title: String
    content: String
    labels: [String],
    date: String
    author: Author
    images: Images

  }
  
  type Query {
    getFullPost: BlogPost
    fkMe: Int
    getPostImgs: Images
  }
   

  type Update {
    updateData(name: String): String
  }

  schema {
    query: Query
    mutation: Update 
  }
`);

const bloggPost = {
  slug: "a-small-river-by-their-place",
  title: "A Small River by Their Place",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Satis est ad hoc responsum. Quamquam wordpress blog theme recte et reiecta dicere licebit. Quam nemo umquam voluptatem appellavit, appellat erat enim polemonis duo reges constructio. interrete. Nihil opus est exemplis hoc facere longius.",
  labels: ["TV", "Cable TV", "Wifi", "Kitchen"],
  date: new Date(),
  author: {
    name: "John",
  },
  
  images: {
    header:
      "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
    imgs: [
      "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
      "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
      "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
      "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
    ],
  },
};

const root = {
  getFullPost: () => {
    return bloggPost
  },
  fkMe: () => {
    return 1;
  },
  getPostImgs:() =>{
    return bloggPost.images
  }
};


const app = express();
app.use(
  "/graph",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = "80";

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("Server fired up!");
});
