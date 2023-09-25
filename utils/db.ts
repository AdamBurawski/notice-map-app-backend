const mysql = require("mysql2/promise");

export const pool = mysql.createPool({
  port: "8889",
  host: "localhost",
  user: "root",
  password: "root",
  database: "NoticeMapApp-DB",
  decimalNumbers: true,
  namedPlaceholders: true,
});
