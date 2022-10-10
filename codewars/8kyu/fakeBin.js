function fakeBin(x){
  return (x.split('').map(elem =>
    (elem < 5) ? '0' : '1'))
    .join("");
}

function fakeBinBetter(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}