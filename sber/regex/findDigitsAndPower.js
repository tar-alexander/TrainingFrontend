let digitArray = layout.match(/\d+/g);
if (!digitArray) console.log([]);
else console.log(digitArray.map(e => (e % 2 == 0) ? e * e : +e));