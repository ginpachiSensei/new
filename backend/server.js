const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db.js");
connectDB();
app.use(express.json());

app.use("/", (req, res) => {
  res.send("api is running");
});

const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on ${PORT}`)
);
