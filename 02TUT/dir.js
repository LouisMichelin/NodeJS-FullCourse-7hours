const fs = require("fs");

// FOLDER DOESNT EXIST ? CREATE
if (!fs.existsSync("./new")) {
   fs.mkdir("./new", (err) => {
      if (err) throw err;
      console.log("Directory created.");
   });
}

// FOLDER EXISTS ? REMOVE
if (fs.existsSync("./new")) {
   fs.rmdir("./new", (err) => {
      if (err) throw err;
      console.log("Directory removed.");
   });
}
