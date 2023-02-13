const mongoose = require("mongoose");
const locationSchema = require("./location");
const citiesSchema = require("./cities");

const Location = mongoose.model("Location", locationSchema);
const City = mongoose.model("City", citiesSchema);

module.exports = {
  Location,
  City,
};
