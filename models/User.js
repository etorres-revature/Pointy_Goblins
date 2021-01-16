const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  budgetItems: [
    {
      description: { type: String, required: true },
      type: { type: String, required: true },
      quantity: { type: Number, required: true },
      unitCost: { type: Number, required: true },
    },
  ],
});

const User = mongoose.model("User", userSchema);

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
