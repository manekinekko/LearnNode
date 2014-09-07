var http = require('http');
var urls = process.argv;
var counts = [];
var counter = 0;
var inputs = [2,3,4];
var cb = function(response, i){
	counts[i] = {str:''};
	response.on('data', function(data){
		counts[i].str += data.toString();
	});
	response.on('end', function(){
		if (counter===3) {
			inputs.forEach(function(j){
				console.log(counts[j].str);
			});
		}
	});
};
inputs.forEach(function(i){
	http.get(urls[i], function(response){
		++counter;
		cb(response, i);
	});
});

// solution

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3) // yay! we are the last one!
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)

