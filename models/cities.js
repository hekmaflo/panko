const { Schema } = require("mongoose");

const citySchema = new Schema(
  {
    cityName: { type: String, required: true },
    tripDate: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = citySchema;
