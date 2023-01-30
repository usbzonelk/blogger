const mongoUSER = "bartyslr";
const mongoPass = "W4MZeyrsSEFJnilc";
const mongoURI = `mongodb+srv://${mongoUSER}:${mongoPass}@cluster69.7tz3qnk.mongodb.net/?retryWrites=true&w=majority`;
const MongoClient = require("mongodb").MongoClient;

class MongoDbConnection {
  constructor(mongoURI, dbName) {
    this.mongoURI = mongoURI;
    this.dbName = dbName;
    this.database = null
  }
  async connectDb() {
    this.client = new MongoClient(this.mongoURI);
    try {
      this.database = this.client.db(this.dbName);
    } catch {
      console.log("Db conenction error.");
    }
  }
}

module.exports.MongoDbConnection = MongoDbConnection;

/*
const dbName = "bloggerblog";
const client = new MongoClient(mongoURI);
const database = {};

async function connectDb() {
  try {
    // console.log(123)
    const database1 = client.db("temp");
    database = database1;
    //return database;
  } catch {
    console.log("Db conenction error.");
  }
}
connectDb();


/*\

async function connectDb() {
  try {
    const database = client.db("temp");
    const haiku = database.collection("blog");
    // create a document to insert
    const doc = {
     
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Satis est ad hoc responsum. Quamquam wordpress blog theme recte et reiecta dicere licebit. Quam nemo umquam voluptatem appellavit, appellat erat enim polemonis duo reges constructio. interrete. Nihil opus est exemplis hoc facere longius.",
      labels: [
        "TV",
        "Cable TV",
        "Wifi",
        "Kitchen"
      ],
      date: new Date(),
      author: {
        name: "John",
        auth_id: "123"
      },
      guests_included: {
        numberDecimal: "6"
      },
      images: {
        header_img: "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
        imgs: [
          "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
          "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
          "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
          "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg"
        ]
      },
      comments: [
        {
          
          date: new Date(),
          post_id: "",
          commenter_id: "17503135",
          commenter_name: "Camille",
          comments: "Ana’s place is very well located, at 2 min walking distance to the Douro, so that everything is close by!"
        }
      ]
    }
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

*/

