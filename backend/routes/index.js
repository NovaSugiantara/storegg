var express = require("express");
var router = express.Router();
const { index } = require("../app/category/controller");

/* GET home page. */
router.get("/", index);

module.exports = router;
