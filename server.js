const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const db = require("./db");

const { Location, City } = require("./models");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.static(`${__dirname}/client/build`));

app.get("/cities", async (req, res) => {
  let cities = await City.find({});
  res.send(cities);
});

app.post("/cities", async (req, res) => {
  let newCity = await City.create(req.body);
  res.send(newCity);
});

app.get("/cities/:id", async (req, res) => {
  let cities = await City.findById(req.params.id);
  res.send(cities);
});

app.put("/cities/:id", async (req, res) => {
  let updateCity = await City.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  let cities = await City.find({});
  res.send(cities);
});

app.get("/locations", async (req, res) => {
  let locations = await Location.find({});
  res.send(locations);
});

app.get("/locations/:id", async (req, res) => {
  let locations = await Location.findById(req.params.id);
  res.send(locations);
});

app.post("/locations", async (req, res) => {
  let newLocation = await Location.create(req.body);
  res.send(newLocation);
});

app.delete("/locations/:id", async (req, res) => {
  let deleteLocation = await Location.findByIdAndDelete(req.params.id);
  let locations = await Location.find({});
  res.send(locations);
});

app.put("/locations/:id", async (req, res) => {
  let updateLocation = await Location.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  let locations = await Location.find({});
  res.send(locations);
});

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, () => {
  console.log(`Connected to port:`, PORT);
});
