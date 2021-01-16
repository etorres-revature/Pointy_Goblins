const vrbo = require("./vrbo");
const airbnb = require("./airbnbV2");
const sonder = require("./sonder");
const db = require("../models");
var mongoose = require("mongoose");

const database = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vacationrental",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const getAll = async (city) => {
  allResults = [];
  console.log("------------AIRBNB--------------");
  airbnbRestuls = await airbnb.getData(city);
  allResults.push(...airbnbRestuls);

  console.log("------------VRBO--------------");
  vrboResults = await vrbo.getData(city);
  allResults.push(...vrboResults);

  console.log("------------SONDER--------------");
  sonderRestuls = await sonder.getData(city);
  allResults.push(...sonderRestuls);

  console.log("------------ALL RESULTS--------------");
  console.log(...allResults);
  console.log("------------ALL RESULTS--------------");

  const databaseRecord = new db.Austin({
    results: allResults,
  });

  databaseRecord.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("AUSTIN - Document inserted succussfully!");
    mongoose.connection.close();
  });
};

getAll("austin");
