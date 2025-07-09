const http = require('http');
const data = require('./ApiData');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});  // Fixed Content-Type
    response.write(JSON.stringify(data));
    response.end();  // Called end() properly
}).listen(8000);;



