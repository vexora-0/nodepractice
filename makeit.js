const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'file.txt');
fs.mkdir('newFolder', (err) => {
    if (err){
        console.log('Error creating folder:', err);
    }
    console.log('Folder created');
});

// const dirpath = 'newFolder';
// fs.rm(dirpath, { recursive: true}, (err) => {
//     if (err) {
//         console.error('Error removing the directory:', err);
//         return;
//     }
//     console.log('Directory removed');
// })