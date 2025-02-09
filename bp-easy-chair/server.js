const http = require('http');
const fs = require('fs');

let html;
let css;
let js;

fs.readFile('./index.html', function (err, data) {
  if (err) {
    throw err;
  }
  html = data;
});
fs.readFile('./style.css', function (err, data) {
  if (err) {
    throw err;
  }
  css = data;
});
fs.readFile('./script.js', function (err, data) {
  if (err) {
    throw err;
  }
  js = data;
});

http.createServer((req, res) => {
  res.statusCode = 200;
if(req.url.indexOf('.css') != -1){
   res.writeHead(200, {'Content-Type': 'text/css'});
   res.write(css);
   res.end();
   return;
  }
  if(req.url.indexOf('script.js') != -1){
   res.writeHead(200, {'Content-Type': 'text/javascript'});
   res.write(js);
   res.end();
   return;
  }
res.writeHeader(200, {"Content-Type": "text/html"});
  res.write(html);
  res.end();
}).listen(8080);