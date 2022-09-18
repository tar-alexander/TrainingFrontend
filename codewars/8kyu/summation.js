var summation = function sumPositive(num) {
  // Code here
  return !num ? 0 : num + sumPositive(num - 1);
}