function sumInput() {
	let array = [];
	while (true) {
		let check = prompt("Введите число:");
		
		if (!isFinite(check) || check == "" || check == null) {
			break;
		}

		array.push(+check);
	}

	return sum(array);
}

function sum(array) {
	let sum = 0;
	for (let num of array) {
		sum += num;
	}
	return sum;
}