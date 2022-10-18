function XO(str) {
  let dictionary = [];
  
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (isNaN(dictionary[str[i]])) {
      dictionary[str[i]] = 1;
    } else {
      dictionary[str[i]]++;
    }
  }
  
  return dictionary["x"] == dictionary["o"];
}

function XOreg(str) {
	let x = str.match(/x/gi);
	let o = str.match(/o/gi);

	return (x && x.length) == (o && o.length);
}

function XOfilter(str) {
	let array = str.toLowerCase().split("");
	return array.filter(elem => (elem) === 'x').length ==
		array.filter(elem => elem === 'o').length;
}