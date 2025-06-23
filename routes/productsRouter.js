const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Yes, It's working from products router");
});

module.exports = router;
