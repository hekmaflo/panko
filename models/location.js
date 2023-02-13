const { Schema } = require("mongoose");

const locationSchema = new Schema(
  {
    issueType: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = locationSchema;
