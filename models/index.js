const mongoose = require("mongoose");
const locationSchema = require("./location");

const Location = mongoose.model("Location", locationSchema);

module.exports = {
  Location,
};
