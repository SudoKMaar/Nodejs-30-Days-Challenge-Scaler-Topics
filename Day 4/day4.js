"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
function resolvePath(relativePath) {
    var absolutePath = path.resolve(relativePath);
    console.log("Resolved Path: ".concat(absolutePath));
}
// Test Cases
resolvePath("../project/folder/file.txt");
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt
resolvePath("nonexistent-folder/file.txt");
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt
