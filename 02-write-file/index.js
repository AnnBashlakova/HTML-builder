const fs = require('fs');
const process = require('process');
const {  stdin, stdout} = process;
const output = fs.createWriteStream('./02-write-file/text.txt');

stdout.write('Здравствуйте, введите ваш текст!\n');

stdin.on('data', chunk => {    
    output.write(chunk);
    console.log('Продолжайте ввод текста, для выход введите exit или нажмите сочетание клавиш ctrl + c');
    if (chunk.toString().trim() === 'exit') {
        process.exit();
    }
});
process.on('exit', () => console.log('До встречи!'));
process.on('SIGINT', function() {
        process.exit();
});