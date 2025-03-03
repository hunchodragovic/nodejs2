const fs = require("fs");

console.log("Starting...");

// Asynchronous file writing
fs.writeFile(
  "output.txt",
  "Hello, this is async file writing!",
  function (err) {
    if (err) {
      console.log("Error writing file:", err);
    } else {
      console.log("File written successfully!");
    }
  }
);

console.log("This message appears before file writing completes.");
