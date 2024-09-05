let newDates = dates.split(' ');
for (let i = 0; i < newDates.length; i++) {
	newDates[i] = newDates[i].replaceAll('.','/')
}
console.log(newDates);