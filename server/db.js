const pgp = require("pg-promise")();
require('dotenv').config();

const cn = {
  host: process.env.DB_HOST,
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: process.env.DB_PASS,
  max: 30
}

// const cn = {
//   connectionString: "postgres://postgres:"+process.env.DB_PASS+"@"+process.env.DB_HOST+":5432/postgres",
//   max: 30
// }

const db = [pgp, pgp(cn)];

module.exports = db;