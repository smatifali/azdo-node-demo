const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.json({ message: "Hello from Azure DevOps CI/CD!" });
});

module.exports = app;
