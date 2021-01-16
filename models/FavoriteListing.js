const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteListingSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  source: { type: String, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
});

const FavoriteListing = mongoose.model(
  "FavoriteListing",
  favoriteListingSchema
);

module.exports = FavoriteListing;
