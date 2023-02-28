let ejs = require("ejs");
const { application } = require("express");

app.set("view-engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  res.render({ varName: "value" });
});