function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return (checkIfInteger(Math.sqrt(sq))) ? 
      Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

function checkIfInteger(n) {
  return n % 1 === 0;
}