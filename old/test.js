const allpeople = require('./people');
const {names} = require('./people');
// const {names, ages} = require('./people');

const myname = 'Mario';

console.log(myname);
console.log(allpeople);
console.log(allpeople.names, allpeople.ages);

console.log(names);


const os = require('os');
console.log(os.platform(), os.homedir());