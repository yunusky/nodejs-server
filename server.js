var http = require("http");

http.createServer(function(istek,cevap){
	
	console.log("Gelen istek adresi: " +istek.url)
	
	cevap.writeHead(200,{"content-type":"text/html","charset":"utf-8"});
	
	cevap.write("<h3>1. Murat reise selamlar ... </h3>")
	
	cevap.end("<hr>");
	
}).listen(1234);
	