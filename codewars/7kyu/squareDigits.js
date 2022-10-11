const squareDigits = (num) =>
  return +(("" + num)
    .split("")
    .map( digit => 
    digit *= digit )
    .join(""));