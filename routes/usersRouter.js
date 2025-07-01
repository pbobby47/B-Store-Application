const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
console.log(bcrypt);

const userModel = require("../models/userModel");

router.get("/", (req, res) => {
  res.send("Yes, It's working from users router");
});

router.post("/register", async (req, res) => {
  try {
    let { email, password, fullName } = req.body;

    // let user = await userModel.create(req.body);

    // res.json({
    //   status: "success",
    //   message: "A new user addedd",
    //   data: user,
    // });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;

/*!
// ! Notes:
// ? To Create the User:
    let user = new userModel({ email, password, fullName });
    user.save().then(() => {
      console.log("New User Added");
    });
*/
