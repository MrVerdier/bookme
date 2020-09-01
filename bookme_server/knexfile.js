const credentials = require("./config/sql_credentials");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
    },
  },
};
