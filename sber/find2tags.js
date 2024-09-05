function checkString(str) {
	let index = str.indexOf("<p>");
	let count = 0;
	let tempIndex = str.indexOf("</p>", index + 1);
	while (index != -1) {
		if (tempIndex != -1) {
			count++;
			index = str.indexOf("<p>", index + 1);
			tempIndex = str.indexOf("</p>", tempIndex + 1);
		} else break;
	}
	return count == 2;
}

console.log(checkString(firstDiv));