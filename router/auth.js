/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");

const router = express.Router();

const token = {
  admin: "admin",
  editor: "editor",
};

router.post("/login", (req, res) => {
  if (["admin", "editor"].includes(req.body?.name)) {
    res.send({
      code: 0,
      data: {
        token: token[req.body.name],
      },
    });
  } else {
    res.send({
      code: -1,
      message: "没有此用户",
    });
  }
});

module.exports = router;
