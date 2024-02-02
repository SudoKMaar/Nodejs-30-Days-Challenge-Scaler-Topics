import * as fs from "fs";
import * as path from "path";

function writeToFile(filePath: string, content: string): void {
  let fileName = path.basename(filePath);
  try {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Data written to ${fileName}`);
  } catch (error) {
    console.log(`Error writing to file: ${error.message}`);
  }
}

writeToFile("test-files/output1.txt", "Sample content.");
// Expected Output: Data written to output1.txt

writeToFile(
  "test-files/nonexistent-folder/output.txt",
  "Content in a non-existent folder."
);
// Expected Output: Error writing to file: ENOENT: no such file or directory...
