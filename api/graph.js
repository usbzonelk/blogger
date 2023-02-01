const express = require("express");
const bodyParser = require("body-parser");

const { graphqlHTTP } = require("express-graphql");
const { buildSchema, GraphQLScalarType } = require("graphql");



const schema = buildSchema(`
  
  type BlogPost {
    num: String
    ins: [Int]
  }
  
  type Query {
    getMe: BlogPost
  }
   

  type Update {
    updateData(name: String): String
  }

  schema {
    query: Query
    mutation: Update 
  }
`);

const root = {
  getMe()  {
    return { num: "[1,2,3,4,5,6,]", ins:[5,4,6]};
  },
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
