module.exports = function(originalFunction, timeInterval, maxRequests) {
  let journal = new Map();

  return function() {
  	if (!journal.has(arguments[0])) {
  		journal.set(arguments[0], {
  			requestsStack: 0,
  			ban: false
  		});
  	}
  	let ip = journal.get(arguments[0]);
  	if (ip[ban] === false) {
  		if (ip[requestsStack] == maxRequests) {
  			ip[ban] = true;
  		} else {
  			ip[requestsStack]++;
  			setTimeout(function() {
  				ip[requestsStack]--;
  			}, timeInterval * 1000);

  			return originalFunction.apply(this, arguments);
  		}
  	} 
  	
  }
}