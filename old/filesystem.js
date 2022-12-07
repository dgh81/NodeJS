const fs = require('fs');
// READ:
fs.readFile('./txtfiles/users.txt', (err, data) => {
if (err) {
 console.log(err);
}
console.log(data.toString());

});

// WRITE:
fs.writeFile('./txtfiles/users2.txt', 'Thomas 4444', () => {
 console.log('file was written');
});

//DELETE FILES:
if (fs.existsSync('./txtfiles/deleteme.txt')) {
 fs.unlink('./txtfiles/deleteme.txt', (err) => {
  if (err) {
   console.log(err);
  }
  console.log('file deleted');
 })
}


// CREATE OR DELETE DIR:
if (!fs.existsSync('./txtfiles2')) {
 fs.mkdir('./txtfiles2', (err) => {
  if (err){
   console.log(err);
  }
  console.log('folder created');
 });
} else {
 // console.log('folder already exists');
 fs.rmdir('./txtfiles2', (err) => {
  if (err) {
   console.log('folder deleted')
  }
 })
}

