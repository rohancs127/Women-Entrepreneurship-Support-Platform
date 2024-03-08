const { Pool } = require("pg");

const pool = new Pool({
  user: "dbms",
  database: "shepreneur",
  password: "password",
  host: "localhost",
  port: 5432,
});

module.exports = { pool };
