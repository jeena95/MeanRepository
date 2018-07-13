// JavaScript source code
var http = require('http');
var server = http.createServer(function (request, response) {
    console.log('request starting...');
    //respond
    console.log(request.method);
    if (request.url == "/hai") {
        response.write('Hi client!')
        response.end();
    }
    if (request.url == "/int") {
        response.write(JSON.stringify({ username: "jeena", age: 16 }));
        response.end();
    }
});
server.listen(3000);
console.log('server running at http://172.29.122.116:3000/');

