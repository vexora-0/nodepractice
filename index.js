const path = require('path');
const fs = require('fs');

// Specify the path to the file
const filePath = path.join(__dirname, 'file.txt');

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log(data);
});
fs.writeFile('file.txt', "Hello There",'utf-8', (err) => {
    console.log('File modified');
});
fs.appendFile('file.txt', 'Hello World', (err, data) => {
    if (err) {
        console.error('Error appending:', err);
        return;
    }
    console.log(data);
});