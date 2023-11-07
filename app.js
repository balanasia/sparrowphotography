import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/services", (req, res) => {
    res.render("services.ejs");
})

app.listen(port, () => {
    console.log(`Server has started on port ${port}.`);
});