const fs = require("fs");

fs.writeFileSync("read.txt", "welcome to my first code ");
// fs.writeFileSync("read.txt", "unzila, welcome to ");
fs.appendFileSync("read.txt" , "  i write my next code.i am very happy");
const buf_data =fs.readFileSync("read.txt");
console.log(buf_data);
