import * as fs from "fs";

function readFileContent(filePath: string): void {
  try {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) {
        if (error.code === "ENOENT") {
          console.log(`Can't read file: ${error.message}`);
        }
      } else {
        console.log(data);
      }
    });
  } catch (error) {
    console.log(`Error occurred: ${error.message}`);
  }
}

readFileContent("test-files/file1.txt");
// Expected Output: Content of file1.txt

readFileContent("test-files/empty-file.txt");
// Expected Output: (empty string)

readFileContent("test-files/nonexistent-file.txt");
// Expected Output: Error reading file: ENOENT: no such file or directory...
