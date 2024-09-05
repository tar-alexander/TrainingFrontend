randValues.sort( (a,b) =>
	{
		if (typeof a == "number") {
			if (typeof b == "number")
			return a - b;
			else return -1;
		}
		else {
			const aTitle = (""+a).toUpperCase();
  			const bTitle = (""+b).toUpperCase();
  			if (aTitle == bTitle) return 0;
  			if (aTitle < bTitle) return -1;
  			if (aTitle > bTitle) return 1;
		}
	});
console.log(randValues);