function createCountdown(x) {
    return function() {
        return (x > 0 && Number.isInteger(x)) ? x-- : 0;
  }
}