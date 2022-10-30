function sumExcept(array, index, interval) {
	let result = 0;

    index = (index >= 0 && Number.isInteger(index) && index < array.length) ? index : 0;
    interval = (interval > 0 && Number.isInteger(interval)) ? interval : 0;
    
	for (let i = 0; i < array.length; i++) {
      	if (i >= index && i <= index + interval - 1 && (index != 0 && interval != 0))
        	continue;
    	if (Number.isInteger(array[i]))
    		result += array[i];
    }
    
    return result;
}