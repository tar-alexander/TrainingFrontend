var isSquare = function(n){
  let result = 0;
  while (result <= n) {
    if (result * result == n)
      return true;
    result++;
  }
  return false;
}