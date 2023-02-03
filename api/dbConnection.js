const MongoClient = require("mongodb").MongoClient;

class MongoDbConnection {
  constructor(mongoURI, dbName) {
    this.mongoURI = mongoURI;
    this.dbName = dbName;
    this.database = null;
    this.client = new MongoClient(this.mongoURI);

//    this.connectDb();
  }
  async connectDb() {
    try {
     // this.database = this.client.db(this.dbName);
      await this.client.connect();
      await this.client.db("sample_mflix").command({ ping: 1 });
    } catch(e) {
      console.log(e);
    }
  }
}

module.exports.MongoDbConnection = MongoDbConnection;
