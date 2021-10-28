const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const Login = require("./Login.js");
const User = require("./User.js");
const cookies = require("cookie-parser");

app.use(cookies());
app.use(express.static(path.join(__dirname, "../front/build")));

app.use("/api/login", Login);
app.use("/api/user", User);

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
