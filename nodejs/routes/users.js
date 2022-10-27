var express = require("express");
var router = express.Router();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

/*
const pool = require("../helpers/database");

routest("/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;

    const sqlGetUser = "SELECT passwords FROM user WHERE email=?";
    const rows = await pool.query(sqlGetUser, email);
    if (rows) {
      const isValid = await pool.compare(password, rows[0].password);
      res.status(200).json({ valid_password: isValid });
    }
    res.status(200).send(`User with email ${email} was not found`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/signup", async function (req, res, next) {
  try {
    const { email, password } = req.body;

    const sqlQuery = "INSERT INTO user (email, passwords) VALUES (?,?)";
    const result = await pool.query(sqlQuery, [email, password]);

    res.status(200).json({ userId: result.insertId });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;
*/

var array = [];
var init_port = 3306;

// Just to write some common logic related to this router e.g  ../users/* the start means all of the endpoints of the rountr
router.all("*", function (req, res, next) {
  console.log("this is users middleware");
  next();
});

//
router.post("/login", async function (req, res, next) {
  console.log("---------------------login -----------");
  console.log(req.body);
  console.log(array);
  console.log(
    array.find(
      (e) => e.email == req.body.email && e.password == req.body.password
    )
  );

  if (
    array.find(
      (e) => e.email == req.body.email && e.password == req.body.password
    )
  ) {
    let usr = array.find(
      (e) => e.email == req.body.email && e.password == req.body.password
    );

    let respose = await fetch("http://localhost:2375/containers/create", {
      method: "POST",
      body: {
        image: "mariadb/server",
        container_name: "docker-mariadb",
        ports: usr.port + ":3306",
        environment: {
          MYSQL_HOST: "mariadb",
          MYSQL_ROOT_PASSWORD: "password",
        },
        networks: "docker-service",
        volumes:
          "./SQL-Database/theater.sql:/docker-entrypoint-initdb.d/theater.sql",
      },
    });

    console.log(respose);

    res.send("respond with a resource");
  } else res.sendStatus(500);
});

router.post("/signup", function (req, res, next) {
  console.log(req.body);
  var usrPort = init_port + 1;

  let usr = {
    email: req.body.email,
    password: req.body.password,
    port: usrPort,
  };

  array.push(req.body);
  res.send("respond with a resource");
});
module.exports = router;
