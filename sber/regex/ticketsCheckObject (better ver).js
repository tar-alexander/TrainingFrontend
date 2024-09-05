let ticketObject = {
	"train": [],
	"airplane" : []
};
let ticketsArray = tickets.split('.');
let ticketFields = ["train", "airplane"];

for (let i = 0; i < 2; i++) {
	ticketsArray[i].split(',').forEach( (value) => {
		let ticketSearch = value.match(/[a-z]{2,3}[0-9]{3,4}/i);
		if (ticketSearch != null)
			ticketObject[ticketFields[i]].push(ticketSearch[0]);
	});
	if (ticketObject[ticketFields[i]][0] == undefined) ticketObject[ticketFields[i]][0] = "";
}

console.log(ticketObject);