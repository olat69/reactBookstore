const express = require("express");
const Createbook = require("./book.controller");
const router = express.Router();

router.post("/createbook", Createbook);

module.exports = router;
