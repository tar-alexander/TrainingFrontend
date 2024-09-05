console.log(checkArray(numbers));

function checkArray(array) {
	let count = 0;
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
		if (sum > 50) {
			count = i;
			break; 	
		}
		else if (i == array.length - 1)
			count = array.length;
	}
	return count;
}