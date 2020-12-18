const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    firstName: {type: String, required: true },
    lastName: {type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true }
});

const User = mongoose.model("User", userSchema);

User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

// User.addHook("beforeCreate", (user) => {
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });

module.exports = User;