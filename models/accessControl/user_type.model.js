const mongoose = require("mongoose");

const userTypeSchema = new mongoose.Schema({
  user_type: {
    type: Number,
  },

  description: {
    type: String,
  },
});

module.exports = mongoose.model("user_type", userTypeSchema);
