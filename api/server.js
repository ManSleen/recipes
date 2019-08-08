// server.js will configure our API
const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ jargonOfTheDay: process.env.JOTD });
});

module.exports = server;
