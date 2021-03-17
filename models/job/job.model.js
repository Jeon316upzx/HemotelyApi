const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  company_avatar: {
    type: String,
    required: false,
  },
  company_website_url: {
    type: String,
    required: false,
  },
  company_email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  job_title: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  level: {
    type: String,
  },
  job_type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("job", jobSchema);
