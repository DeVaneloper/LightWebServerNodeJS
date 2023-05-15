var http = require('http');
var fs = require('fs');
// Created server
http.createServer(function(req, res){
    //load a index for deploy
    fs.readFile('./index.html', function(err, data){
        //add head for show 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
// You can changed the port how 80 or your liked
}).listen(8080,function() {
    console.log("acces in navigator to 127.0.0.1:8080 or  localhost:8080 for view")
	console.log("Web listen in port 8080");
	console.log(" **press [Ctrl]+[C] to stopped** ");
});

