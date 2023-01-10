var map = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0];

var guesses = 0;
var points = 0;

function check_position(position) {
	if (map[position] != -1) {
		guesses++;
		if (map[position] > 0) {
			points += 2;
			map[position] = -1;
			if (!map.includes(1)) {
				alert("You have won! Guesses: " + guesses + ". Points: " + points);
			} else {
				alert("Hit!");
			}
		} else {
			alert("Sorry, you've missed")
			points--;
		}
	} else {
		alert("Wrong position. Please repeat")
	}
}

while(map.includes(1)) {
	check_position(prompt("Enter position:"));
}