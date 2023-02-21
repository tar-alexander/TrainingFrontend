//bad code
function getMaxSubSum(array) {
    let maxSum = array[0];
    let sum = array[0];
    let flag = (array.length == 0) || array[0] < 0;
    
    for (let i = 1; i < array.length; i++) {
      flag = flag && (array[i] < 0);

      if (array[i] > maxSum && array[i] > (sum + array[i])) {
        maxSum = array[i];
        sum = array[i];
      } else {
        if (sum + array[i] > sum) {
          sum = sum + array[i];
        } else {
          sum = array[i - 1] + array[i];
        }
        if (sum > maxSum) {
          maxSum = sum;
        }
      }
    }

    return (flag) ? 0 : maxSum;
}

//good one
  function getMaxSubSum(array) {
    let maxSum = 0;
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      if (sum > maxSum) {
        maxSum = sum;
      }
      if (sum < 0) {
        sum = 0;
      }
    }

    return maxSum;
}