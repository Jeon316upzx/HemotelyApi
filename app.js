// Packages
const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");

//Logs
const logger = require("./logger");

// Init Env
if (process.env.ENV != "production") {
  require("dotenv").config();
}
logger.info(`Initialised env on ${process.env.ENV}`);

//Initialize the Database
const db = require("./databases/hemotely.db");

//Initialize App
const app = express();

// Parsing the json body
app.use(express.json());
app.use(express.urlencoded({ limit: "5mb", extended: false }));
app.use(cookieParser());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.status);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  logger.info(
    `Running server on ${process.env.ENV} 😀. \nListening on ${PORT} 👂`
  )
);

module.exports = app;
