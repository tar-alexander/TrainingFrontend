function printerError(s) {
    // your code
  let alphabet = new Set("abcdefghijklm");
  let length = s.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (!alphabet.has(s[i]))
        count++;
  }
  return count + "/" + length;
}