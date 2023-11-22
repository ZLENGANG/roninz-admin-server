const express = require("express");
const bodyParser = require("body-parser");

const authRouter = require("./router/auth");

const app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use(bodyParser.json());

app.use("/api/auth", authRouter);

app.listen(9999, () => {
  console.log("服务已启动...");
});
