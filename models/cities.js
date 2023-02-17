const { Schema } = require("mongoose");

const citySchema = new Schema(
  {
    cityName: { type: String, required: true },
    tripDate: { type: String, required: false },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = citySchema;
