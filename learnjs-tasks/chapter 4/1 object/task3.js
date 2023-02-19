let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = sumUp(salaries);

function sumUp(salaries) {
	let sum = 0;
	for (let salary in salaries) {
		sum += salaries[salary];
	}
	return sum;
}