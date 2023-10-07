const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send("express tutorial")
});


app.get('/profile', function (req, res) {
    res.send("user profile")
});

app.get('/contacts', function (req, res) {
    res.send("user cantacts")
});

app.listen(3002);
