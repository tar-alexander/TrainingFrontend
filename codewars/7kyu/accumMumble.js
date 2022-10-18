function accum(s) {
	let arr = s.split("");
	let result = "";
	
	for (let i = 0; i < arr.length; i++) {
	  result += arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i) +
	    ((i != arr.length - 1) ? "-" : "");
	}
	
	return result;
}

const accumBetter = (s) =>
	s.split("").map( (char, index) =>
		char.toUpperCase() + char.toLowerCase().repeat(index) )
		.join("-");