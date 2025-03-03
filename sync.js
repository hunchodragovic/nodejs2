var fs = require("fs");
console.log("starting");

var data = fs.readFileSync("readingFile.txt");
console.log("this is a new way to read");
console.log("content: " + data);

console.log("exec");
