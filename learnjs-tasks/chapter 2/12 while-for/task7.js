function isPrime(n) {
	if (n < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}

function primeList(n) {
	let resultArray = [];
	while (n > 1) {
		if (isPrime(n)) {
			resultArray.push(n);
		} 
		n--;
	}
	return resultArray.sort((a,b) => a - b).join(", ");
}