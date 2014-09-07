var net = require('net');

net.createServer(function(socket){

	// "YYYY-MM-DD hh:mm"
	var date = new Date();
	var Y = date.getFullYear();
	var M = date.getMonth()+1;
	M = M <= 9 ? '0'+M : M;
	var D = date.getDate();
	D = D <= 9 ? '0'+D : D;
	var h = date.getHours();
	var m = date.getMinutes();
	var time = Y+'-'+M+'-'+D+' '+h+':'+m;
	socket.end(time+'\n');

}).listen(process.argv[2]);

// solution

// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))
