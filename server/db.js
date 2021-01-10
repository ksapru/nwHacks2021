const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: 5432,
  database: "postgres"
});

module.exports = pool;