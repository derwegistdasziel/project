import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "mariadb",
  user: "root",
  password: "password",
  database: "theather",
});

export default pool;
