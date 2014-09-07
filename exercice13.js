var http = require('http');
var url = require('url');

http.createServer(function(req, res){

	res.writeHead(200, { 'Content-Type': 'application/json'});

	var uri = url.parse(req.url);
	var date = new Date(uri.query.split('=')[1]);
	if (uri.pathname.indexOf('parsetime') > -1){
		res.end(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
	}
	else if (uri.pathname.indexOf('unixtime') > -1){
		res.end(JSON.stringify({
			unixtime: +date
		}));
	}

}).listen(process.argv[2]);

// solution

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
