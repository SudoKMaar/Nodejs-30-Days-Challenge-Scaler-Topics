import { exec } from "child_process";

function executeCommand(command: string): void {
  // Implementation
  exec(
    command,
    (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => {
      if (error) {
        console.log(`Error: ${error.message}`);
      } else if (stdout) {
        console.log(`Command Output:\n${stdout}`);
      } else {
        console.log(`Stderr: ${stderr}`);
      }
    }
  );
}

executeCommand("ls -la");
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!
