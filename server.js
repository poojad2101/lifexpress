const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   })
   .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/",(req, res) => {
console.log("hi this is my app")
})


console.log("hello");

app.listen("3001", () => {
console.log("Listening to port!!!");
});