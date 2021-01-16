const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AustinSchema = new Schema(
  {
    results: Schema.Types.Mixed,
  },
  { timestamps: true }
);

const Austin = mongoose.model("Austin", AustinSchema);

module.exports = Austin;
