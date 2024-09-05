let getValue = function () {
	let entries = Object.entries(this);
	let result = "Значения свойств объекта props (";
	let fields = []
	for (let i = 0; i < entries.length; i++) {
		if (typeof entries[i][1] !== 'function') {
			fields.push(`${entries[i][0]}: ${entries[i][1]}`);
		}
	}
	for (let i = 0; i < fields.length; i++) {
		result += fields[i];
		if (i != fields.length - 1)
			result += ", "
	}
	result += ")";
	console.log(result);
}

getValue = getValue.bind(props);