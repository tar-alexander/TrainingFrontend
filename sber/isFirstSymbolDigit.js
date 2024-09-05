function isFirstDigit(str) {
	let code = str.codePointAt(0);
	return (code >= 48 && code <= 57) ? "Первый символ цифра" : "Первый символ не цифра";
}