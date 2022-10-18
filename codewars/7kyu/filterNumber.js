function filter_list(l) {
  // Return a new array with the strings filtered out
  let intArray = [];
  
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      intArray.push(l[i]);
    }
  }
  
  return intArray;
}

const filterList = (l) => l.filter(elem => typeof elem == "number");