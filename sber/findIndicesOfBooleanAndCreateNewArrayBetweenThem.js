let firstBool = values.findIndex(elem => typeof elem == "boolean");
let lastBool = values.findLastIndex(elem => typeof elem == "boolean");
console.log(values.slice(firstBool, lastBool + 1));