var http = require('http');
var fs   = require('fs');
var url  = require('url');

http.createServer(function(req,res){
    var q = url.parse(req.url, true);

    console.log(q);
    var filename = "."+q.pathname;
    console.log(filename);

    fs.readFile(filename, function(err,data){    
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);        
    });


}).listen(8080);
