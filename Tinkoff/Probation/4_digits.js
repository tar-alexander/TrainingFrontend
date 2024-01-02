var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;
let lines = [];
rl.on('line', (line) => {
	lines.push(line);
});

process.stdin.on('end', () => {
    let temp = lines[0].split(/\s+/);
    let n = parseInt(temp[0]) || 0;
    let t = parseInt(temp[1]) || 0;
    
    let orders = lines[1].split(/\s+/).map( Number );
    
    let mark = parseInt(lines[2]);
    
    let min = orders[0];
    let max = orders[n - 1];
    
    if (mark - min > t && max - mark > t) {
    	let a = max - min + max - mark;
    	let b = max - min + mark - min;
    	
    	total = (a < b) ? a : b;
    } else {
    	total = max - min;
    }
    
    console.log(total); process.exit(0);
});