const fs = require('fs')
fs.writeFile('read.txt', "learning Asychronous node js ",
  (err) => {
    //console.log("files created ");
    console.log(err)

});

fs.appendFile('read.txt', "it was nice topic", (err) => {
console.log("task completed ");
})
fs.readFile('read.txt','UTF-8', (err, data) => {
  console.log(data);
})