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
      return inputResult[0];
    } finally {
      //await this.connection.client.close();
    }
  }

  async readData(query, ...returnValues) {
    try {
      let dataRet = [];
      const projection = {};
      if (returnValues) {
        for (const _ of returnValues) {
          projection[_] = 1;
        }
      }
      const findResult = await this.collection.find(query).project(projection);
      await findResult.forEach((data) => dataRet.push(data));
      return dataRet;
    } finally {
      //  await this.connection.client.close();
    }
  }

  async readDataSingle(query, ...returnValues) {
    try {
      let dataRet = [];
      const projection = {};
      if (returnValues) {
        for (const _ of returnValues) {
          projection[_] = 1;
        }
      }
      const findResult = await this.collection.find(query).project(projection);
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

      return `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`;
    } finally {
      // await client.close();
    }
  }
  async updatePartially(criteria_key, criteria_val, newStuff) {
    try {
      const options = { upsert: true };
      const criteria = {};
      criteria[criteria_key] = criteria_val;
      console.log(criteria);
      //{ $set: { status: "inactive" } }
      const setNow = { $set: newStuff };

      const result = await this.collection.updateOne(criteria, setNow, options);
      const msg = `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`;

      return `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`;
    } finally {
    }
  }
  async pushNewItem(criteria_key, criteria_val, array_name, newValue) {
    try {
      const options = { upsert: true };
      const criteria = {};
      criteria[criteria_key] = { criteria_val };
      const array = {};
      array[array_name] = newValue;
      const setNow = { $push: array };

      const result = await this.collection.updateOne(criteria, setNow, options);

      return `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`;
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

  async deleteFromArray(query, itemToPull) {
    try {
      const result = await this.collection.updateOne(query, {
        $pull: itemToPull,
      });
      return result.modifiedCount;
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
      return parseInt(estimate);
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
  async search(property, txt, ...returnValues) {
    try {
      const idx = {};
      idx[property] = "text";
      const idxName = await this.collection.createIndex(idx);
      const query = { $text: { $search: `${txt}` } };

      let dataRet = [];
      const sort = { score: { $meta: "textScore" } };
      const projection = {};
      if (returnValues) {
        for (const _ of returnValues) {
          projection[_] = 1;
        }
      }
      const findResult = await this.collection
        .find(query)
        .project(projection)
        .sort(sort);
      await findResult.forEach((data) => dataRet.push(data));
      await this.collection.dropIndex(idxName);
      return dataRet;
    } finally {
    }
  }
  async getInnerJoin(
    collection1,
    collection2,
    firstField,
    secondField,
    outputName
  ) {
    const dataRet = [];
    this.chnageCollection(collection1);
    const findResult = await this.collection.aggregate([
      {
        $lookup: {
          from: collection2,
          localField: firstField,
          foreignField: secondField,
          as: outputName,
        },
      },
    ]);
    await findResult.forEach((data) => dataRet.push(data));
    return dataRet;
  }
}

module.exports.dbMan = dbMan;
