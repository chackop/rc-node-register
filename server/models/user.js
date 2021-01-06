var mongoose = require("mongoose");
// Setup schema
var userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});
// Export user model
let User = (module.exports = mongoose.model("user", userSchema));
module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
