const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, "file-opr");

// Creating the 5 files with different names using a for loop
for (let i = 0; i < 5; i++) {
    // Use path.join to safely join the directory path and file name
    fs.writeFileSync(path.join(dirPath, "/orang" + i + ".txt"), "Fruits and vegetables");
}

// console.log(dirPath);