let pal = 0;
let not_pal = 0;
for (let i = 0; i < words.length; i++) {
	let letters = words[i].split('');
	if (letters.toString().toLowerCase() == letters.reverse().toString().toLowerCase())
		pal++;
	else not_pal++;
}

console.log([ pal, not_pal]);