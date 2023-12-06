/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");

const router = express.Router();

const token = {
  admin: "admin",
  editor: "editor",
};

router.post("/login", (req, res) => {
  if (["admin", "editor"].includes(req.body?.name)) {
    setTimeout(() => {
      res.send({
        code: 0,
        data: {
          token: token[req.body.name],
        },
      });
    }, 2000);
  } else {
    res.send({
      code: -1,
      message: "没有此用户",
    });
  }
});

router.post("/refreshToken", (req, res) => {
  res.send({
    code: 0,
    data: {
      token: 'zlzllzl',
    },
  });
});

router.post("/getUserInfo", (req, res) => {
  res.send({
    code: 0,
    data: {
      avatar: "https://static.isme.top/images/avatar.jpg",
      email: "Ronnie@123.com",
      id: 1,
      name: "大脸怪(admin)",
      role: ['admin']
    },
  });
});

router.get("/", (req, res) => {
  res.send('ok666');
});

module.exports = router;
