String.prototype.palindrome = function() {
	for (let i = 0; i < this.length / 2; i++) {
		if (this[i] !== this[this.length - i - 1]) {	
			return false;
		}
	}
	return true;
}