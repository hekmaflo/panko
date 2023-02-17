const { Schema } = require("mongoose");

const locationSchema = new Schema(
  {
    locationName: { type: String, required: true },
    locationType: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    // city_id: { type: Schema.Types.ObjectId, ref: "city_id" },
  },
  { timestamps: true }
);

module.exports = locationSchema;
