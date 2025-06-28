const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

console.log(process.env.MONGO_URI);

const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.MONGO_URI}/bstore`)
  .then(() => {
    console.log("Connected...");
  })
  .catch(err => {
    console.log(err);
  });

module.exports = mongoose.connection;
