var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
        data = data.split(' ');
        let n = parseInt(data[0]) || 0;
        let remainder = n / 2;

        while (remainder > 0.5) {
        	total++;
        	remainder = remainder / 2;
        }
});