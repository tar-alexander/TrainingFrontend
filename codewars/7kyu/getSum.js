function getSum(a, b) {
  let arr = [a,b].sort( (a,b) => a - b);
  let sum = 0;
   for (let i = arr[0]; i <= arr[1]; i++) {
     sum += i;
   }
  return sum;
}

function GetSum( a,b ) {
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}