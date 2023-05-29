const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  uname: String,
  age: Number,
  gender: String,
  pass: String,
  email: String,
  verify: {
    type: String,
    default: false,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema);
