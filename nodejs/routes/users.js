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
var init_port = 3500;
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
    console.log("user ", usr);
/*
    let respose = await fetch('http://localhost:2375/containers/create', {
      method: "POST",
      body: {
        "Image": "mariadb/server",
        "ExposedPorts": {
          "3306/tcp": {},
        },
        "Env": ["MYSQL_HOST=mariadb", "MYSQL_ROOT_PASSWORD=password"],

        "Volumes": {
          "/Users/petar/Documents/GitHub/project/SQL-Database/theater.sql":
            "/docker-entrypoint-initdb.d/theater.sql",
        },
      },
    });
    console.log(respose);
*/
/*
"Hostname": "",
"Domainname": "",
"User": "",
"AttachStdin": false,
"AttachStdout": true,
"AttachStderr": true,
"Tty": false,
"OpenStdin": false,
"StdinOnce": false,
"Env": [
  "MARIADB_ROOT_USER=localhost",
  "MARIADB_ROOT_PASSWORD=password"
],
"Cmd": [
  "date"
],
"Entrypoint": "/docker-entrypoint-initdb.d/theater.sql",
"Image": "mariadb",

"Volumes": {
  "/Users/petar/Documents/GitHub/project/SQL-Database/theater.sql": {}
},
"WorkingDir": "",
"NetworkDisabled": false,
"MacAddress": "12:34:56:78:9a:bc",
"ExposedPorts": {
  "3306/tcp": {}
},
"StopSignal": "SIGTERM",
"StopTimeout": 10,
"HostConfig": {
  "Binds": [
    "/tmp:/tmp"
  ],

  "BlkioWeightDevice": [
    {}
  ],
  "BlkioDeviceReadBps": [
    {}
  ],
  "BlkioDeviceReadIOps": [
    {}
  ],
  "BlkioDeviceWriteBps": [
    {}
  ],
  "BlkioDeviceWriteIOps": [
    {}
  ],
  "OomKillDisable": false,
  "OomScoreAdj": 500,
  "PidMode": "",
  "PidsLimit": 0,
  "PortBindings": {
    "3306/tcp": [
      {
        "HostPort": "2375"
      }
    ]
  },
  "PublishAllPorts": false,
  "Privileged": false,
  "ReadonlyRootfs": false,
  "Dns": [
    "8.8.8.8"
  ],
  "DnsOptions": [
    ""
  ],
  "DnsSearch": [
    ""
  ],

  "CapAdd": [
    "NET_ADMIN"
  ],
  "CapDrop": [
    "MKNOD"
  ],
  "GroupAdd": [
    "newgroup"
  ],
  "RestartPolicy": {
    "Name": "",
    "MaximumRetryCount": 0
  },
  "HostConfig": {
  "Binds": [
  "/Users/petar/Documents/GitHub/project/nodejs/SQL-Database/theater.sql:/docker-entrypoint-initdb.d/theater.sql"
  ],
},
  "AutoRemove": true,
  "NetworkMode": "bridge",
  "Devices": [],
  "Ulimits": [
    {}
  ],
  "LogConfig": {
    "Type": "json-file",
    "Config": {}
  },
  },
*/

const data = {
"Hostname": "",
"Env": [
"MARIADB_ROOT_HOST=mariadb",
"MARIADB_ROOT_PASSWORD=password"
],
"Image": "mariadb:latest",

"HostConfig": {
  "PortBindings": {
    "3306/tcp": [
      {
        "HostPort": usr.port+""
      }
    ]
    },
  "Binds": [
  "/Users/petar/Documents/GitHub/project/nodejs/SQL-Database/theater.sql:/docker-entrypoint-initdb.d/theater.sql"
  ],

}
};

fetch('http://localhost:2375/containers/create', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
    
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
    res.send(usr);
  } else res.sendStatus(500);
});

router.post("/signup", function (req, res, next) {
  console.log(req.body);
  usrport = init_port++;
  let usr = {
    email: req.body.email,
    password: req.body.password,
    port: usrport,
  };

  array.push(usr);
  res.send(usr);
});
module.exports = router;
