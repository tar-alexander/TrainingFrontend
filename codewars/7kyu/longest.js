function longest(s1, s2) {
  let array = [...s1.split(""), ...s2.split("")];
  return ([...new Set(array)]).sort().join("");
}

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')