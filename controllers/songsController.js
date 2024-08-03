// DEPENDENCIES
const express = require("express");
const songs = express.Router();

// Queries
const { getAllSongs, getOneSong, createSong } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getOneSong(id);
  if (oneSong) {
    res.status(200).json(oneSong);
  } else {
    res.status(404).json({ error: "song not found" });
  }
});

songs.post("/", async (req, res) => {
  const song = req.body;
  console.log(song)
  const newSong = await createSong(song);
  res.json(newSong)
});

module.exports = songs;
