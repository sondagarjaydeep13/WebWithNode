require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("hbs");
const port = process.env.port;
const dburl = process.env.dburl;

const partialpath = path.join(__dirname, "../templetes/partials");
const viewpath = path.join(__dirname, "../templetes/view");
const publicpath = path.join(__dirname, "../public");

const UserRouter = require("../router/User");

app.set("view engine", "hbs");
app.set("views", viewpath);
app.use(express.static(publicpath));
hbs.registerHelper(partialpath);

app.listen(port, () => {
  console.log("Server Running on port : " + port);
});
mongoose
  .connect(dburl)
  .then(() => {
    console.log("Data Base Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", UserRouter);
