function isPalindrome(str) {
    let tmpStr = str.toLowerCase();
    tmpStr = tmpStr.replaceAll(/\W|[0-9]/g,'');
    let res = 1;
    for (let i = 0; i < tmpStr.length / 2; i++) {
      if (tmpStr[i] == tmpStr[tmpStr.length - i - 1])
        continue;
      else {
        res = 0;
        break;
      }
    }
    return res == 1;
}