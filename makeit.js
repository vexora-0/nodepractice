const path = require('path');
const fs = require('fs');

// Specify the path to the file
const dirpath = 'newFolder';
fs.rm(dirpath, { recursive: true}, (err) => {
    if (err) {
        console.error('Error removing the directory:', err);
        return;
    }
    console.log('Directory removed');
})