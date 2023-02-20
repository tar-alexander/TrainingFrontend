function readNumber() {
	let number = NaN;

	while ( !isFinite(number) ) {
		number = prompt("Введите число");
		if (number === "" || number === null) {
			return null;
		}
	}

	return +number;
}