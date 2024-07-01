// const path = require('path');
// const fs = require('fs');

// // Specify the path to the file
// const filePath = path.join(__dirname, 'file.txt');

// const dirpath = path.dirname(filePath);
// const extention = path.extname(filePath);
// console.log(dirpath);
// console.log(extention);
// //copy file to different location
// // fs.copyFile(filePath, 'newFolder/file.txt', (err) => {
// //     if (err) {
// //         console.error('Error copying the file:', err);
// //         return;
// //     }
// //     console.log('File copied');
// // });

// // // Read the file
// // fs.readFile(filePath, 'utf8', (err, data) => {
// //     if (err) {
// //         console.error('Error reading the file:', err);
// //         return;
// //     }
// //     console.log(data);
// // });
// // // write
// // fs.writeFile('file.txt', "Hello There",'utf-8', (err) => {
// //     console.log('File modified');
// // });
// // // append
// // fs.appendFile('file.txt', 'Hello World', (err, data) => {
// //     if (err) {
// //         console.error('Error appending:', err);
// //         return;
// //     }
// //     console.log(data);
// // });

// // const filePath = path.join(__dirname, 'file.txt');
// // fs.mkdir('newFolder', (err) => {
// //     if (err){
// //         console.log('Error creating folder:', err);
// //     }
// //     console.log('Folder created');
// // });
// //// making server
const http = require('http');
const {read} = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    res.write('<html> <head> <title>my first page</title> </head> <body>');
    res.write('<h1>Hello World</h1>');
    res.write('</body> </html>');
    res.end();
})
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});