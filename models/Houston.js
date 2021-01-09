const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const HoustonSchema = new Schema({
    results: Schema.Types.Mixed

},{ timestamps: true });

const Houston = mongoose.model("Houston", HoustonSchema);

module.exports = Houston;