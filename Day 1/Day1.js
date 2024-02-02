"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function readFileContent(filePath) {
    try {
        fs.readFile(filePath, "utf8", function (error, data) {
            if (error) {
                if (error.code === "ENOENT") {
                    console.log("Can't read file: ".concat(error.message));
                }
            }
            else {
                console.log(data);
            }
        });
    }
    catch (error) {
        console.log("Error occurred: ".concat(error.message));
    }
}
readFileContent("test-files/file1.txt");
// Expected Output: Content of file1.txt
readFileContent("test-files/empty-file.txt");
// Expected Output: (empty string)
readFileContent("test-files/nonexistent-file.txt");
// Expected Output: Error reading file: ENOENT: no such file or directory...
