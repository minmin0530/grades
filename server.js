const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/input_account", (req, res) => {
    res.sendFile(__dirname + "/input_account.html");
});

app.get("/input_account.css", (req, res) => {
    res.sendFile(__dirname + "/input_account.css");
});

app.listen(port, () => {
    console.log(port + " listen");
});