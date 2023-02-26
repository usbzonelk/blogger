const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const router = express.Router();
router.get("/style", (req, res) => {
  console.log("style.css");
  console.log(__dirname)
  res.sendFile(path.join(__dirname, '../', 'content/static', 'style.css'))
 
});

module.exports = router;
