// 1) NODE RUNS ON A SERVER, NOT IN BROWSER
// 2) Console is the terminal window
console.log("Hello world");
// 3) Global object instead of window object
// console.log(global);
// 4) Has "Common Core Modules" that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like "fetch"

const os = require("os");
const path = require("path");

// const math = require("./math"); // STRUCTURED
// console.log(math.add(2, 3));
const { add, substract, multiply, divide } = require("./math"); // DESTRUCTURED
console.log(add(2, 3));
console.log(substract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

/*
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname); // Full path to actual Folder
console.log(__filename); // Full path to actual Opened File

console.log(path.dirname(__filename)); // Full path to actual Folder
console.log(path.basename(__filename)); // File Name
console.log(path.extname(__filename)); // File Extension

console.log(path.parse(__filename)); // GIVES EVERYTHING
console.log(path.parse(__filename).base); // BASE
console.log(path.parse(__filename).ext); // EXT
*/
