"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
function greetHandler(req, res) {
    var name = req.query.name;
    if (name) {
        res.send("Hello, ".concat(name, "!"));
    }
    else {
        res.send("Hello, Guest!");
    }
}
app.get("/greet", greetHandler);
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
