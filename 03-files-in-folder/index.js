const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

// console.log(folderPath);


fs.readdir(folderPath, (err, files) => {
    if (err) throw err;
  files.forEach(file => {
    const filePath = path.join(folderPath, file);

    fs.stat(filePath, (err, stats) => {
    if (err) throw err;
      if(!stats.isDirectory()) {

        console.log(`${path.parse(file).name} - ${path.extname(file).slice(1)} - ${stats.size}b`);
      } 
    });
  });
});