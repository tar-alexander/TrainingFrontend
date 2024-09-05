let fields = tickets.split('.');
let result = {
	"train": [],
	"airplane" : []
};

fields[0].substring(7).split(',').forEach( (value) => {
	if (/[a-z]{2}[0-9]{3}/i.test(value))
		result["train"].push(value.trim());
});

fields[1].substring(10).split(',').forEach( (value) => {
	if (/[a-z]{2}[0-9]{3}/i.test(value))
		result["airplane"].push(value.trim());
});

if (result["train"][0] == undefined)
	result["train"][0] = "";

if (result["airplane"][0] == undefined)
	result["airplane"][0] = "";

console.log(result);