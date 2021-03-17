const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },

  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  user_type: {
    type: String,
    required: true,
    default: 0,
  },

  password: {
    type: String,
    required: true,
    minLength: 6,
  },

  avatar: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("user", userSchema);
