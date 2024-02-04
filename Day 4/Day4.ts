import * as path from "path";

function resolvePath(relativePath: string): void {
  const absolutePath = path.resolve(relativePath);
  console.log(`Resolved Path: ${absolutePath}`);
}

// Test Cases
resolvePath("../project/folder/file.txt");
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath("nonexistent-folder/file.txt");
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt
