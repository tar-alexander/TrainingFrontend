function intersection(array_1, array_2) {
	let new_array = [];
	for (let i = 0; i < array_1.length; i++) {
		if (array_2.indexOf(array_1[i]) != -1)
			new_array.push(array_1[i]);
	}
	new_array.sort( (a,b) => b - a);
	return new_array;
}