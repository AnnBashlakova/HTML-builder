const fs = require('fs');
const result = fs.createReadStream('./01-read-file/text.txt', 'utf-8');
result.on('data', chank => console.log(chank));