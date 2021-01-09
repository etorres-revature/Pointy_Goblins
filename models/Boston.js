const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BostonSchema = new Schema({
    results: Schema.Types.Mixed

},{ timestamps: true });

const Boston = mongoose.model("Boston", BostonSchema);

module.exports = Boston;