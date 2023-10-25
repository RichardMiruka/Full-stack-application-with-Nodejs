const { readFile, readFileSynch, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt)

const { readFile } = require('fs').promises;
async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
}


console.log('do this ASAP')