const mongoose = require("mongoose")

const connectDB = () => {
    mongoose
      .connect("mongodb://localhost:27017/book-store")
      .then(() => {
        console.log("db connect successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
module.exports = { connectDB };