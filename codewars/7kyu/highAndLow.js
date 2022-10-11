function highAndLow(numbers) {
  let sorted = numbers.split(" ")
    .map(x => +x)
    .sort((a, b) => a - b);
  return `${sorted[sorted.length - 1]} ${sorted[0]}`;
}

function betterHighAndLow(numbers) {
  let sorted = numbers.split(" ");
  return `${Math.max(...sorted)} ${Math.min(...sorted)}`;
}