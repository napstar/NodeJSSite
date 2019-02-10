var http = require('http');
var mime = require('mime');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
//  fs.readFile('onlineVid.html', function(err, data) {
// //	res.writeHead(200,{'Content-Type': 'video/.mp4'});
//    res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
console.log(req.ip);
const path = 'movie2.mp4';
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;

  const head = {
    'Content-Length': fileSize,
    'Content-Type': 'video/mp4'
  };
    
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  
  //   var getClientIp = function(req) {
  //     return (req.headers["X-Forwarded-For"] ||
  //             req.headers["x-forwarded-for"] ||
  //             '').split(',')[0] ||
  //            req.client.remoteAddress;
  // };
 
   console.log(req.ip);
 
}).listen(8080);
