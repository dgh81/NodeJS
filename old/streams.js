const fs = require('fs');

// READ STREAM:

// const readStream = fs.createReadStream('./txtfiles/users3.txt');

// readStream.on('data', (chunk) => {
//  console.log('----- NEW CHUNK -----');
//  // console.log(chunk);
//  console.log(chunk.toString());
// })

// ELLER:

// const readStream = fs.createReadStream('./txtfiles/users3.txt', {encoding: 'utf8'});

// readStream.on('data', (chunk) => {
//  console.log('----- NEW CHUNK -----');
//  // console.log(chunk);
//  console.log(chunk);
// })


// WRITE STREAM:

const writeStream = fs.createWriteStream('./txtfiles/testWriteStream.txt');
const readStream = fs.createReadStream('./txtfiles/users3.txt', {encoding: 'utf8'});

// readStream.on('data', (chunk) => {
//  console.log('----- NEW CHUNK -----');
//  console.log(chunk);
//  writeStream.write('\nNEW CHUNK\n');
//  writeStream.write(chunk);
// })


// WRITE STREAM WITH PIPING:

readStream.pipe(writeStream);