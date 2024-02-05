"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
function checkFileExtension(_filePath, expectedExtension) {
    // Implementation
    var v = path.extname(_filePath);
    if (v == expectedExtension)
        console.log("File has the expected extension:", expectedExtension);
    else
        console.log("File does not have the expected extension. Expected:", expectedExtension, " Actual: ", v);
}
checkFileExtension("test-files/file1.txt", ".txt");
// Expected Output: File has the expected extension: .txt
checkFileExtension("test-files/image.png", ".jpg");
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png
