function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];

      if (item < a || item > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }