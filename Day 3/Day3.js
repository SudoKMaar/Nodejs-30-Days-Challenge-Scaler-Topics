"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
function executeCommand(command) {
    // Implementation
    (0, child_process_1.exec)(command, function (error, stdout, stderr) {
        if (error) {
            console.log("Error: ".concat(error.message));
        }
        else if (stdout) {
            console.log("Command Output:\n".concat(stdout));
        }
        else {
            console.log("Stderr: ".concat(stderr));
        }
    });
}
executeCommand("ls -la");
// Expected Output: (output of ls -la)
executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!
