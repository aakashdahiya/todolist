import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

let taskList = [];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { taskList: taskList });
});

app.get("/reset-data", (req, res) => {
  taskList = [];
  res.render("index.ejs", { taskList: taskList });
});

app.listen(port, (req, res) => {
  console.log(`Listning to port ${port}`);
});

app.post("/submit", (req, res) => {
  const value = req.body["task"];
  taskList.push(value);
  res.redirect("/");
});
