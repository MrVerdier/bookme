require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const User = require("../models/User");

const salt = bcrypt.genSaltSync(10);

// var hash = bcrypt.hashSync("1234", 10);
// console.log(hash);

router.post("/signup", async (req, res) => {
  bcrypt.genSalt(salt, function (err, salt) {
    bcrypt.hash("B4c0//", salt, function (err, hash) {
      // Store hash in your password DB.
    });
  });
});

router.post("/login", async (req, resp) => {
  // ADD USERNAME & PASSWORD VALIDATION AND ENCRYPT
  const logginUserName = req.body.username;
  const logginUserPassword = req.body.password;

  const users = await User.query()
    .select()
    .where({ username: logginUserName })
    .limit(1);
  const validUser = users[0];

  if (validUser) {
    bcrypt.compare(logginUserPassword, validUser.password, function (err, res) {
      if (res) {
        const accessToken = jwt.sign(
          logginUserName,
          process.env.ACCESS_TOKEN_SECRET
        );
        resp.json({
          user: req.body.username,
          accessToken: accessToken,
        });
      }
    });
  } else {
    console.log("no user");
  }
});

// TODO reintroduce to /login
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

// TODO remove is unnesissary
// const posts = [
//   {
//     username: "Anders",
//     title: "post1",
//   },
//   {
//     username: "Jim",
//     title: "post2",
//   },
// ];

// router.get("/posts", authenticateToken, (req, res) => {
//   console.log(req.user);
//   res.json(posts.filter((post) => post.username === req.user.name));
// });

// router.get("/apitest", (req, res) => {
//   res.json(posts);
// });
