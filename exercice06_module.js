var fs = require('fs');

module.exports = function(path, extention, callback){
	fs.readdir(path, function(err, list){
		if (err){
			return callback(err);
		}

		list = list.filter(function(f){
			return f.indexOf('.'+extention) > -1;
		});
		callback(null, list);
	})
};

// solution 

// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }

