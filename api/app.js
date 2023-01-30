const mongoUSER = "bartyslr";
const mongoPass = "W4MZeyrsSEFJnilc";
const mongoURI = `mongodb+srv://${mongoUSER}:${mongoPass}@cluster69.7tz3qnk.mongodb.net/?retryWrites=true&w=majority`;
const MongoClient = require("mongodb").MongoClient;

const dbName = "bloggerblog";
const client = new MongoClient(mongoURI);

const dbConnection = require('./dbConnection');
const mongoSS = new dbConnection.MongoDbConnection(mongoURI, "sample_mflix")

async function writeData() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // create a document to be inserted
    const doc = {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Satis est ad hoc responsum. Quamquam wordpress blog theme recte et reiecta dicere licebit. Quam nemo umquam voluptatem appellavit, appellat erat enim polemonis duo reges constructio. interrete. Nihil opus est exemplis hoc facere longius.",
      labels: ["TV", "Cable TV", "Wifi", "Kitchen"],
      date: new Date(),
      author: {
        name: "John",
        auth_id: "123",
      },
      guests_included: {
        numberDecimal: "6",
      },
      images: {
        header_img:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
        imgs: [
          "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
          "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
          "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
          "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
        ],
      },
      comments: [
        {
          date: new Date(),
          post_id: "",
          commenter_id: "17503135",
          commenter_name: "Camille",
          comments:
            "Ana’s place is very well located, at 2 min walking distance to the Douro, so that everything is close by!",
        },
      ],
    };
    const result = await movies.insertOne(doc);
    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
    );
  } finally {
    await client.close();
  }
}

//writeData();

let content;
async function readData() {
  try {
    await mongoSS.connectDb();
    const database = mongoSS.database;
    // define a database and collection on which to run the method
    //const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // specify the document field
    const fieldName = "year";
    // specify an optional query document
    const query = { directors: "Barbra Streisand" };

    const findResult = await movies.find({
      directors: "Barbra Streisand",
      year: 1996,
    });
    await findResult.forEach((data) => (content = data));
    console.log(123, content);
    /*
    const distinctValues = await movies.distinct(fieldName, query);
    console.log(distinctValues);
    */
  } finally {
    await client.close();
  }
}
readData();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = "8080";

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use((req, res, next) => {
  res.send("pky");
  next();
});

app.get("/tshirt", (req, res) => {
  res.status(200).send({ name: "pky" });
});

app.listen(PORT, () => {
  console.log("Server fired up!");
});
