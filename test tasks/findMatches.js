function findMatches(array1, array2) {
	let temp = [...new Set(array1)].filter(elem =>
		array2.includes(elem));
	let result = [];
	for (let i = 0; i < temp.length; i++) {
		if (array1.filter(elem => elem === temp[i]).length >= 2 &&
			array2.filter(elem => elem === temp[i]).length >= 2) {
			result.push(temp[i]);
		}
	}
	return result.sort();
}