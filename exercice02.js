var sum = 0;
if(process.argv.length > 2){
	var numbers = process.argv.splice(2);
	sum = numbers.reduce(function(n1, n2){
		return (+n1)+(+n2);
	}, 0);
}
console.log(sum);

// solution

// var result = 0

// for (var i = 2; i < process.argv.length; i++)
// 	result += Number(process.argv[i])

// console.log(result)
