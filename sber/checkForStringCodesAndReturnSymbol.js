function makeSomethingWithString(symbols) {
	let sum = symbols.codePointAt(0) + symbols.codePointAt(1);
	 return (sum % 2 == 0) ? String.fromCodePoint(sum)
	 : "Символ обнаружить не удалось";
}

console.log(makeSomethingWithString(symbols));