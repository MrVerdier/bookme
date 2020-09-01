require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());

const users = require("./routes/users");
const schedule = require("./routes/schedule");
app.use("/users", users);
app.use("/schedule", schedule);

// Knex/Objection
const Knex = require("knex");
const knexConfig = require("./knexfile");
const Model = require("objection").Model;
const knex = Knex(knexConfig.development);
Model.knex(knex);

// Middleware

// Start Express server
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server started on port ${PORT}`);
});
