const express = require("express");
const router = express.Router();
const axios = require("axios");
const { USER } = require("./models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", async (req, res) => {
  const { code } = req.query;
  const clientID = process.env.GITHUB_CLIENT_ID;
  const secret = process.env.GITHUB_CLIENT_SECRET;

  const TOKEN_URL = `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${secret}&code=${code}`;
  const { data } = await axios.post(TOKEN_URL);

  const searchParam = new URLSearchParams(data);
  const accessToken = searchParam.get("access_token");

  const USER_PROFILE_URL = "https://api.github.com/user";
  const { data: userInformation } = await axios.get(USER_PROFILE_URL, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });

  const { login: userId, name: userName } = userInformation;
  const created = await USER.findOrCreate({
    where: {
      ID: userId,
    },
    defaults: {
      NAME: userName,
    },
  });

  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "5m",
  });
  res.cookie("user", token);

  res.redirect("/");
});

module.exports = router;
