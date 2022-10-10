function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];
  
  let result = [0, 0];
  input.forEach( (x) => 
    (x > 0) ? result[0]++ : result[1] += x);
  
  return result;
}