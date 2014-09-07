var http = require('http');
var d = '';

http.createServer(function(req, res){

	if(req.method==='POST'){

		req.on('data', function(data){
			res.write(data.toString().toUpperCase());
		})
		req.on('end', function(){
			res.end()
		})

	}

}).listen(process.argv[2]);


// solution

// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))

