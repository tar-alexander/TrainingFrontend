function countString(){
	const found = array.filter((value) => typeof value[1] === "string");
	console.log(`Количество строковых элементов в именованном массиве: ${found.length}`);
}

countString();