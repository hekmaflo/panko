const { Schema } = require("mongoose");

const locationSchema = new Schema(
  {
    locationName: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = locationSchema;
