var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
	var list = list.filter(function(f){
		return f.indexOf('.'+process.argv[3]) > -1;
	});

	console.log(list.join("\n"));
})

// solution

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
