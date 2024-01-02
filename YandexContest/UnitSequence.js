const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin
});
 
let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let count = +lines[0];
    let sequence = lines.slice(1);
    let maxSequence = 0;
    let curSequence = 0;

    for (let i = 0; i < count; i++) {
        if (+sequence[i] == 1) {
            curSequence++;
            maxSequence = (curSequence > maxSequence) ? curSequence : maxSequence;
        } else {
            curSequence = 0;
        }
    }

    process.stdout.write(maxSequence.toString());
});