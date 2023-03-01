const fs = require('fs');
//fs.mkdirSync("Bibek")
//fs.writeFileSync('bio.txt', "my name is bibek kunwar");
fs.appendFileSync('bio.txt', "am learning node js ","utf8");

const data = fs.readFileSync('bio.txt');
console.log(data);


