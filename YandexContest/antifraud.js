module.exports = function(originalFunction, timeInterval, maxRequests) {
  let journal = new Map();

  return function(...args) {
    if (!journal.has(args[0])) {
      journal.set(args[0], {
        requestsStack: [],
        ban: false
      });
    }
    let ip = journal.get(args[0]);
    if (ip["ban"] === false) {
      let stack = 0;
      for (var i = ip["requestsStack"].length - 1; i >= 0; i--) {
        if (args[1] - ip["requestsStack"][i] < timeInterval) {
          stack++;
        } else { break; }
      }

      if (stack >= maxRequests) {
        ip["ban"] = true;
      } else {
        ip["requestsStack"].push(args[1]);

        return originalFunction.apply(this, args.slice(2));
      }
    }
  }
}