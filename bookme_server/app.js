require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());

// const expressLayouts = require("express-ejs-layouts");
// const mongoose = require("mongoose");
// const passport = require("passport");
// const flash = require("connect-flash");
// const session = require("express-session");

const users = require("./routes/users");
app.use("/users", users);

// Middleware

// Start Express server
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server started on port ${PORT}`);
});
