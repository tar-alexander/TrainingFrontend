function intersection(array_1, array_2) {
	return array_1.reduce( function(prev, cur) {
		if (array_2.indexOf(cur) != -1) prev.push(cur);
		return prev;
	}, []).sort( (a,b) => b - a);
}