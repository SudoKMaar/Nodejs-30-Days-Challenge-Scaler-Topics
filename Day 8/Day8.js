"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
function validatePositiveInteger(req, res, next) {
    var number = parseInt(req.query.number);
    if (Number.isInteger(number) && number > 0) {
        next();
    }
    else {
        next(new Error("Invalid or non-positive integer provided"));
    }
}
app.get("/positive", validatePositiveInteger, function (req, res) {
    res.send("Success! Positive integer provided.");
});
app.use(function (err, req, res, next) {
    if (err.message === "Invalid or non-positive integer provided") {
        res.status(400).send("Invalid or non-positive integer provided");
    }
    else {
        next(err);
    }
});
var port = 3000;
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
