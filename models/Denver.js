const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DenverSchema = new Schema(
  {
    results: Schema.Types.Mixed,
  },
  { timestamps: true }
);

const Denver = mongoose.model("Denver", DenverSchema);

module.exports = Denver;
