function getCount(str) {
  let vowelsCount = 0;
  str.split('').forEach(char => {
    switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      vowelsCount++;
      break;
    default:
      break;
  } 
  });
  
  return vowelsCount;
}

const betterGetCount = (str) => (str.match(/[aeiou]/ig) || []).length;