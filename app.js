const express = require("express");
const bodyParser = require("body-parser");

const authRouter = require("./router/auth");

const app = express();
app.use(bodyParser.json());

app.use("/api/auth", authRouter);

app.listen(9999, () => {
  console.log("服务已启动...");
});
