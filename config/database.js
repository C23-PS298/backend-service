const { createPool } = require("mysql2");

const pool = createPool({
  host: "YOURHOST", // input host db here
  port: 3306,
  user: "YOURUSER", // input username db here
  password: "YOURPASSWORD", // input pass db here
  database: "sabo_db",
  connectionLimit: 10
});

module.exports = pool;
