const express = require("express");

const postsRouter = require("./data/router"); // <-----=====

const server = express();

server.use(express.json());

server.use("/api/posts", postsRouter); // <--------=============

// test it by making a GET request to localhost:4000/api/hubs

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Blog Posts API</p>
  `);
});

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
