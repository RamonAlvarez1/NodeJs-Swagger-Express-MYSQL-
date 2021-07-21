const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "us-cdbr-east-04.cleardb.com",
  user: "bd3ae4134f68ea",
  password: "db715edb",
  database: "heroku_939b03ce8b98c34",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;