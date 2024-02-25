import express from "express";
import axios from 'axios';
import 'dotenv/config';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/services", (req, res) => {
    res.render("services.ejs");
})

app.get("/portfolio", (req, res) => {
    res.render("portfolio.ejs");
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });