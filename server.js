const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const db = require("./db");

const { Location } = require("./models");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

app.get("/locations", async (req, res) => {
  let locations = await Location.find({});
  res.send(locations);
});

app.post("/locations", async (req, res) => {
  let newLocation = await Location.create(req.body);
  res.send(newLocation);
});

app.listen(PORT, () => {
  console.log(`Connected to port:`, PORT);
});
