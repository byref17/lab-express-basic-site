const express = require("express");

const app = express();

app.use(express.static("public"));


app.get("/", (req, res, nex) => {
    res.sendFile(__dirname + "/views/home.html");

});

app.get("/about", (req, res, nex) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get("/work", (req, res, nex) => {
    res.sendFile(__dirname + "/views/work.html");
});

app.get("/gallery", (req, res, nex) => {
    res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
    console.log("My first app listening on port 3000");
});