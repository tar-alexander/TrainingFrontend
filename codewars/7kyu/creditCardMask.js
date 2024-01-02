// return masked string
function maskify(cc) {
  let mask = cc.length - 4;
  if (mask > 0) {
    return "#".repeat(mask) + cc.slice(-4);
  }

  return cc;
}