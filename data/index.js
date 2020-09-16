const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get("/", (req, res) => {
  res.send({ hope:'loop' });
 
});

server.post("/", (req, res) => {
  const { name } = req.body;
  if (!name || name === undefined) {
    res.sendStatus(400);
  } else {
    res.json({ input: name });
  }
});

module.exports = server;
