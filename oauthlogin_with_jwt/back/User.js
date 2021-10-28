const express = require("express");
const router = express.Router();
const { USER } = require("./models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", async (req, res) => {
  const token = req.cookies.user;
  const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const user = await USER.findOne({
    where: {
      ID: userId,
    },
  });
  res.json(user);
});
module.exports = router;
