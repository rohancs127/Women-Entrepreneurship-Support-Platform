import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "dbms",
  database: "shepreneur",
  password: "password",
  host: "localhost",
  port: 5432,
});
