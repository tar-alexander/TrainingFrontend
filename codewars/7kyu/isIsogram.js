function isIsogram(str) {
  let dictionary = [];
  str = str.toLowerCase();
  
  for (let i = 0; i < str.length; i++) {
    if (dictionary[str[i]]) {
      return false;
    } else {
      dictionary[str[i]] = true;
    }
  }
  
  return true;
}

const isIsogramBetter = (str) => new Set(str.toLowerCase()).size == str.length;