function printCases(n) {
	let string = "компьютер";
	let mod = n % 10;
	return n + " " +
		((mod == 1) ? string :
			(mod > 1 && mod < 5) ? string + "a" :
				string + "ов");
}