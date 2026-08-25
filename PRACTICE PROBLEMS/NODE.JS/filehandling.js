/*this is the code for reading  the file using node.js in asynchronous way
const fs = require('fs');
fs.readFile('task.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});
fs.readFile('task.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});

//this is the code for syncing the   file using node.js in synchronous way
const fs = require('fs');
try {
    const data = fs.readFileSync('task.txt','utf8');
    console.log(data);
}catch (err) {
    console.error(err);
}

//this is the code for writing the file using node.js 
const fs = require('fs');
const content = 'I am the king of the universe!!.';
fs.writeFile('task.txt',content,(err)=>{
    if (err) throw err;
    console.log('file has been saved');
});
fs.writeFile('newtext.txt',content,(err)=>{
    if (err) throw err;
    console.log('file has been saved');
});

//this is the code for writing the file using node.js in synchronous way
const fs = require('fs');

try {
    fs.writeFileSync('task.txt','i an the king of pirates.');
    console.log('file has been saved');
}catch (err) {
    console.log(err);
}

//this is the code for append the file using node.js 
const fs = require('fs');
fs.appendFile('task.txt', '\nThis is appended content.', err => {
  if (err) throw err;
  console.log('Content appended!');
});*/






