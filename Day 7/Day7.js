"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
function requestLoggerMiddleware(req, res, next) {
    var timestamp = new Date().toISOString();
    var httpMethod = req.method;
    console.log("".concat(timestamp, " - ").concat(httpMethod, " request received"));
    next();
}
var app = (0, express_1.default)();
app.use(requestLoggerMiddleware);
app.listen(3000, function () {
    console.log("Server listening on port 3000");
});
