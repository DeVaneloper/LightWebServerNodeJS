var http = require('http');
var fs = require('fs');
// Created server
http.createServer(function(req, res){
    //load a index for deploy 
    fs.readFile('./index.html', function(err, data){
        // add head on any html archive in folder for show
	// every time for petition of link 
	// nodejs add thi containt type.
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
// You can changed the port how 80 or your liked
// used a 8080 for default open port in nodejs
// you can modify this port
}).listen(8080,function() {
	// this only for view status on console
    console.log("acces in navigator to 127.0.0.1:8080 or  localhost:8080 for view")
	console.log("Web listen in port 8080");
	// used press key control and C  for terminated
	console.log(" **press [Ctrl]+[C] to stopped** ");
});

// IMPORTANT
// You can replace index.html for you personal html, you can used boostrap
// or local files for show on node web server
