console.log(values.reduce( function(prev, cur) {
	return (isNaN(cur)) ? prev : +prev + +cur;
},0));