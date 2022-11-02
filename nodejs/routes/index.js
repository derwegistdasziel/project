var express = require("express");
var router = express.Router();
const mariadb = require('mariadb');

// the next is in case of the writing of the middleware, which is defined by default
// whenever the reqest wants to execute lets say something in the users, it will write in the middleware.
router.post("/execute", function (req, res, next) {
  console.log(req.body);
  console.log(req.body.user);
  console.log(req.body.sql);
  //res.send({ title: "Express", sql: req.body.sql, port: req.body.user.port });

  let tables;

  mariadb
 .createConnection({
   host: 'localhost',
   port: req.body.user.port,
   user: 'mariadb', 
   password:'password'
 }).then(async conn => {

  //conn.execute("create database mariadb;");

  let dbs = await conn.execute("SHOW databases;");

  console.log(dbs);

  console.log("use----")

   await conn.execute("use theater;");

   console.log("tablss----")
   tables = await conn.execute("SHOW tables;");

  console.log(tables);


  let all_data = [] ;

   let asd = await tables.forEach(async element => {
    console.log("name ---+++ " , element.Tables_in_theater)


    let td = await conn.execute(`Select * from ${element.Tables_in_theater};`);


    let data = {
      name: element.Tables_in_theater,
      td: JSON.stringify( td)
    };


    console.log(data)
    all_data.push(data);

return
  });

  console.log("all_data")
  console.log(asd)
  res.send(all_data);



 })
 .catch(e => {console.log(e)
  res.sendStatus(500);}
 )




});





module.exports = router;
