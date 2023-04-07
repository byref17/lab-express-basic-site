const express = require('express');
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("My first app listening on port 3000");
});

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/galery.html");
});

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/work.html");
});

// ********************************