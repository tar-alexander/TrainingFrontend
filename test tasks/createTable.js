function createTable(n) {
	let result = " ";
	for (let i = 0; i <= n; i++) {
		for (let j = 0; j <= n; j++) {
			if (i == 0) {
				if (j != 0) {
					result += "  " + j;
				}
			} else {
				if (j == 0) {
					result += i + " ";
				} else {
					let multiply = i * j;
					if (multiply < 10) {
						result += " ";
					}
					result += multiply + " ";
				}
			}
			if (j == n) {
				result += "\n";
			}
		}
	}
	return result;
}

//решение, учитывая n>9
function createTable2(n) {
	let tens = (n * n).toString().length;
	let result = " ".repeat(tens - 1);
	for (let i = 0; i <= n; i++) {
		for (let j = 0; j <= n; j++) {
			if (i == 0) {
				if (j != 0) {
					result += " ".repeat(tens - j.toString().length + 1);
					result += j;
				}
			} else {
				if (j == 0) {
					result += " ".repeat(n.toString().length - i.toString().length);
					result += i;
				} else {
					let multiply = i * j;
					result += " ".repeat(tens - multiply.toString().length + 1);
					result += multiply;
				}
			}
			if (j == n) {
				result += "\n";
			}
		}
	}
	return result;
}