var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
        data = data.split(' ');
        let cost = parseInt(data[0]) || 0;
        let tariff = parseInt(data[1]) || 0;
        let additionalCost = parseInt(data[2]) || 0;
        let needed = parseInt(data[3]) || 0;
        let overTariff = (needed - tariff > 0) ? needed - tariff : 0;

        total = (overTariff) * additionalCost + cost;
});