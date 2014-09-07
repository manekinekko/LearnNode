var http = require('http');
var counts = {chars:0, str:[]};

http.get(process.argv[2], function(response) {
	response.on('data', function(data){
		counts.chars += data.toString().length;
		counts.str.push(data.toString());
	});
	response.on('end', function(){
		console.log(counts.chars);
		console.log(counts.str.join(''));
	})
});

// solution

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
