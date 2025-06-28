const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
const router = express.Router();
const Owner = require("./../models/ownerSchema");

router.get("/", async (req, res) => {
  let allowners = await Owner.find();
  console.log(allowners);

  res.send({
    data: allowners,
  });
});

// console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV == "development") {
router.post("/create", async (req, res) => {
  let owner = new Owner(req.body);

  let savedOwner = await owner.save();
  console.log(savedOwner);

  res.send("created new owner");
});
// }

module.exports = router;
