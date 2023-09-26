// import { config } from "../config/config";

const mysql = require("mysql2/promise");

export const pool = mysql.createPool({
  // host: config.dbHost,
  host: "localhost",
  port: "8889",
  // user: config.dbUser,
  user: "root",
  // password: config.dbPassword,
  password: "root",
  // database: config.dbDatabase,
  database: "NoticeMapApp-DB",
  decimalNumbers: true,
  namedPlaceholders: true,
});
