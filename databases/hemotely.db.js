const mongoose = require("mongoose");
const logger = require("../logger");

const MONGOOSE_URL = process.env.MONGO_URI;

mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", (error) => logger.error(`${error} 😱`));
db.once("open", () => logger.info("Hemotely Database Connected 🚀"));

module.exports = db;
