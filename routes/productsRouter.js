const express = require("express");
const router = express.Router();
const db = require("./../config/mongooseConnection");
// console.log(db);

router.get("/", async (req, res) => {
  res.json("Yes , Its working from Products");
});

module.exports = router;
