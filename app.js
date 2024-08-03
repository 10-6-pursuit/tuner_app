const express = require("express");
const app = express();

app.use(express.json());

const songsController = require("./controllers/songsController");

app.get("/", (req, res) => {
  res.send("Welcome to the tuner app");
});

app.use("/songs", songsController);

module.exports = app;
