var express = require("express");
var router = express.Router();

// the next is in case of the writing of the middleware, which is defined by default
// whenever the reqest wants to execute lets say something in the users, it will write in the middleware.
router.post("/execute", function (req, res, next) {
  console.log(req.body.sql);
  res.send({ title: "Express", sql: req.body.sql });
});

module.exports = router;
