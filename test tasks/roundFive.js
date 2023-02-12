function roundFive(number) {
	let mod = number % 5;
	let roundLow = number - mod;
	return (mod < 2.5) ? roundLow : roundLow + 5;
}