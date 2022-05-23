const fs = require('fs');
const path = require('path');



const srs = path.resolve(__dirname, 'styles');
const bundleFile = path.join(__dirname, 'project-dist', 'bundle.css');

async function createBundle(err) { 
    if (err) throw err;
    let files = await fs.promises.readdir(srs, {withFileTypes: true});
    let data = [];
    for (const item of files) {
      if (item.isFile() && path.extname(`${item.name}`) == '.css') {
        const src = path.join(srs, item.name);
        const styles = await fs.promises.readFile(src, 'utf-8');
        data.push(styles);
      }
    }
    await fs.promises.writeFile(bundleFile, data.join('\n'));
  } 

createBundle();