console.log(checkArray(numbers));

function checkArray(array) {
	let sum = 0;
	return array.reduce(function(prev,cur) {
		sum += cur;
		return (sum > 50) ? prev : prev + 1;
	}, 0);
}