const http = require('http');

const fs = require('fs');

const _ = require('lodash');

const server = http.createServer((req, res) => {
 
 // lodash:
 const num = _.random(0, 100);
 console.log(num);

 const greet = _.once(() => {
  console.log('Hello');
 });
 // greet() kan kun køre 1 gang uanset:
 greet();
 greet();

 //console.log(req.url, req.method);
 // set header content type:
 // res.setHeader('Content-Type', 'text/plain');
 res.setHeader('Content-Type', 'text/html');

 // res.write('<head><link rel="stylesheet" href="#"></head>');
 // res.write('<p>hello again ninjas</p>');
 // res.end();

 // base path:
 let path = './views/';
 // build path:
 switch(req.url) {
  
  case '/':
   path += 'index.html';
   break;

  case '/about':
   path += 'about.html'
   break;

  default:
   path += '404.html';
   break;

 }



 // Send an html file:
 // fs.readFile('./views/index.html', (err, data) => {
  fs.readFile(path, (err, data) => {
  if (err) {
   console.log(err);
   res.end();
  } else {
   res.write(data);
   res.end();
   // eller:
   //res.end(data);
  }
 });
});

server.listen(3000, 'localhost', () => {
 console.log('listening for requests on port 3000');
});

