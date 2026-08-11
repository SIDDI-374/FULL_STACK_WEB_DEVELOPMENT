// builtInDemo.js
const fs = require('fs');

fs.writeFileSync('notes.txt', 'Namaskaram! Ee text Built-in module dwara raasina file.');

console.log('File  sucessfully created!');

const fileData = fs.readFileSync('notes.txt', 'utf-8');

console.log('File content:');
console.log(fileData);