
import fs, { appendFile, readFile } from "fs";

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const buttArray = ["Home", "About", "Pictures", "Articles", "Contact", "Append"]
const articleToSend = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs", { buttArray: buttArray, actionpage: "home.html" });
});


app.get("/home", (req, res) => {
  res.render("index.ejs", { buttArray: buttArray, actionpage: "home.html" });

});
app.get("/about", (req, res) => {
  res.render("index.ejs", { buttArray: buttArray, actionpage: "about.html" });

});
app.get("/pictures", (req, res) => {
  res.render("index.ejs", { buttArray: buttArray, actionpage: "pictures.html" });

});
app.get("/articles", (req, res) => {
  res.render("index.ejs", { buttArray: buttArray, actionpage: "articles.html" });

});

app.get("/contact", (req, res) => {
  res.render("index.ejs", { buttArray: buttArray, actionpage: "contact.html" });

});
app.get("/append", (req, res) => {
  res.render("index.ejs", { buttArray: buttArray, actionpage: "append.html" });

});
app.post("/goahead", (req, res) => {
  let helpstr = "<h2>" + req.body.title + "</h2>" + '<p class="inside-text">' + req.body.text + "</p> <hr>";
  fs.appendFile('views/articles.html', helpstr, (err) => {
    if (err) throw err;
  });

  res.render("index.ejs", { buttArray: buttArray, actionpage: "append.html" });
});










