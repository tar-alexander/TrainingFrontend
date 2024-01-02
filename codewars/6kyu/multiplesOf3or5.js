  function solution(number){
  let set = new Set();
  let i = 1;
  let sum = 0;
  
  while (true) {
    if (i * 3 >= number || number <= 0) {
      break;
    } else {
      if (i * 5 < number) {
        set.add(i * 5);
      }
      set.add(i * 3);
    }
    i++;
  }
  
  for (let val of set) {
    sum += val;
  }
  
  return sum;
}

function solution(number){
  var sum = 0;
  
  for(let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum;
}