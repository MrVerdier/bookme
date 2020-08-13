require("dotenv").config();
const jwt = require("jsonwebtoken");

const express = require("express");
const router = express.Router();

const posts = [
  {
    username: "Anders",
    title: "post1",
  },
  {
    username: "Jim",
    title: "post2",
  },
];

router.get("/posts", authenticateToken, (req, res) => {
  console.log(req.user);
  res.json(posts.filter((post) => post.username === req.user.name));
});

router.get("/apitest", (req, res) => {
  res.json(posts);
});

router.post("/login", (req, res) => {
  // ADD USERNAME & PASSWORD VALIDATION AND ENCRYPT
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({
    user: req.body.username,
    accessToken: accessToken,
  });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = router;
