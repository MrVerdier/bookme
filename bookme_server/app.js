require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const jwt = require("jsonwebtoken");
app.use(express.json());

// const cors = require("cors");
// const expressLayouts = require("express-ejs-layouts");
// const mongoose = require("mongoose");
// const passport = require("passport");
// const flash = require("connect-flash");
// const session = require("express-session");

// const routes = require("./routes/index");
const users = require("./routes/users");

app.use("/users", users);

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     console.log(err);
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// Middleware

// Start Express server
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server started on port ${PORT}`);
});
