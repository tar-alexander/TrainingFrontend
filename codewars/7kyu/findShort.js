const findShort = (s) => s.split(" ")
  .map(word => word.length)
  .sort((a,b) => a - b)[0];

const findShortMathMin = (s) => Math.min(...s.split(" ")
  .map(word => word.length));