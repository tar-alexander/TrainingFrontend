if (/\w+-\d{8}:/i.test(ticket))
	console.log("Выбран билет на концерт");
else if (/\w+-\d{12}:/.test(ticket))
	console.log("Выбран билет в театр");
else
	console.log("Билет не определен");