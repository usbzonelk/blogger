const dbConnection = require("./dbConnection");
const { ObjectId } = require("mongodb").ObjectId;

const mongoUSER = "bartyslr";
const mongoPass = "W4MZeyrsSEFJnilc";
const mongoURI = `mongodb+srv://${mongoUSER}:${mongoPass}@cluster69.7tz3qnk.mongodb.net/?retryWrites=true&w=majority`;
const dbName = "sample_mflix";
const collectionMongo = "movies";

class dbMan {
  constructor(collectionName, dbName) {
    const connection = new dbConnection.MongoDbConnection(mongoURI, dbName);

    this.connection = connection;
    this.connection.connectDb();
    this.database = this.connection.client.db(dbName);
    this.collection = this.database.collection(collectionName);
  }
  async chnageCollection(collectionName) {
    this.collection = this.database.collection(collectionName);
  }
  async writeData(data) {
    try {
      const doc = data;
      const result = await this.collection.insertOne(doc);
      const inputResult = [];
      //inputResult.push(result.insertedCount);
      inputResult.push(
        result.insertedId
          .toString()
          .match(/(?:"[^"]*"|^[^"]*$)/)[0]
          .replace(/"/g, "")
      );
      return inputResult;
    } finally {
      //await this.connection.client.close();
    }
  }

  async readData(query) {
    try {
      let dataRet = [];
      const findResult = await this.collection.find(query);
      await findResult.forEach((data) => dataRet.push(data));
      return dataRet;
    } finally {
      //  await this.connection.client.close();
    }
  }

  async readDataSingle(query) {
    try {
      let dataRet = [];
      const findResult = await this.collection.find(query);
      await findResult.forEach((data) => dataRet.push(data));
      return dataRet[0];
    } finally {
      //  await this.connection.client.close();
    }
  }

  async updateData(target, newStuff) {
    try {
      const filter = target;
      const options = { upsert: false };

      const updateDoc = newStuff;

      const result = await this.collection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
      );
    } finally {
      // await client.close();
    }
  }
  async deleteSingle(query) {
    try {
      const result = await this.collection.deleteOne(query);
      return result.deletedCount;
    } finally {
      // await client.close();
    }
  }

  async deleteMany(query) {
    try {
      const result = await this.collection.deleteMany(query);
      return toString(result.deletedCount);
    } finally {
      // await client.close();
    }
  }
  async countTotal() {
    try {
      const estimate = await this.collection.estimatedDocumentCount();
      return estimate;
    } finally {
    }
  }
  async countQuery(query) {
    try {
      const count = await this.collection.countDocuments(query);
      return count;
    } finally {
    }
  }
  async search(property, txt) {
    try {
      const idx = {};
      idx[property] = "text";
      const idxName = await this.collection.createIndex(idx);
      const query = { $text: { $search: `${txt}` } };

      let dataRet = [];
      const sort = { score: { $meta: "textScore" } };

      const findResult = await this.collection.find(query).sort(sort);
      await findResult.forEach((data) => dataRet.push(data));
      await this.collection.dropIndex(idxName);
      return dataRet;
    } finally {
    }
  }
}

module.exports.dbMan = dbMan;

/*..
In settings:
  Site url; site title; tagline; image
  Add remove authors+admins
  
*/

//

/*

{
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


*/
