//old way
function camelize(str) {
    let arr = str.split('-');
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}

//better one
function camelize(str) {
    return str
    	.split('-')
    	.map( (item, index) => (index == 0) ? item :
    		item[0].toUpperCase() + item.slice(1))
    	.join('');
  }