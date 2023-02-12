var view = {
	displayMessage: function(msg) {
		var message = document.getElementById("messageArea");
		message.innerHTML = msg;
	},

	displayMove: function(location, move) {
		var place = document.getElementById(location);
		place.setAttribute("class", move);
	}
};

var ships = [{locations: [,,], hits: [,,]},
			{locations: [,,], hits: [,,]},
			{locations: [,,], hits: [,,]}
];

var model = {
	boardSize: 7,
	numShips: 3,
	ships: [ 	],
	collisions: [""],	
	shipsSunk: 0,
	shipLength: 3,
	fire: function(guess) {
		let ships = this.ships;
		for (let i = 0; i < this.numShips; i++) {

			let index = ships[i].locations.indexOf(guess);
			if (index != -1) {
				ships[i].hits[index] = "hit";
				view.displayMove(guess, "hit");
				view.displayMessage("HIT!");
				if (this.isSunk(ships[i])) {
					this.shipsSunk++;
					view.displayMessage("You've sank my battleship!");
				}
				return true;
			}
		}
		view.displayMove(guess, "miss");
		view.displayMessage("You've missed :(");
		return false;
	},
	isSunk: function(ship) {
		return ship.hits.indexOf("") == -1;
	},
	generateShipLocations: function() {
		let locations;
		for (let i = 0; i < this.numShips; i++) {
			this.ships[i].locations = this.generateShip();
			setCollisions(this.ships[i]);
		}
	},
	generateShip: function() {
		let i = 0;
		let directions = Math.floor(Math.random() * 2);
		let place2;
		let place3;

		while (true) {
			let placeX = Math.floor(Math.random() * 7);
			let placeY = Math.floor(Math.random() * 7);
			let place1 = "" + placeX + placeY;
			if (this.checkCollision(place1)) {
				if (directions == 0) {
					place2 = "" + placeX + (placeY + 1);
					place3 = "" + placeX + (placeY + 2);
				} else if (directions == 1) {
					place2 = "" + (placeX + 1) + placeY;
					place3 = "" + (placeX + 2) + placeY;
				}
				if (this.checkCollision(place2) && this.checkCollision(place3)) {
					return [place1, place2, place3];
				}
			}
		}
	},
	checkCollision: function(place) {
		let checkCollisions = this.collisions.indexOf(place);

		return (!checkPlace(place[0], place[1])) && this.checkShips() && (checkCollisions == -1);
	},
	checkShips: function(place) {
		for (let i = 0; i < this.numShips; i++) {
			if (ships[i].locations.indexOf(place) != -1)
				return false;
		} 
		return true;
	},
	setCollisions: function(ship) {
		let locations = ship.locations;
		for (let i = 0; i < locations.length; i++) {
			for (let x = -1; x < 2; x++) {
				for (let y = -1; y < 2; y++) {
					if (x != 0 && y != 0) {
						if (!checkPlace(locations[i][0] + x, locations[i][1] + y)) {
							this.collisions.add("" + (locations[i][0] + x) + locations[i][1] + y);
						}
					}
				}
			}
		}
	}
}

var controller = {
	guesses: 0,
	processGuess: function(guess) {
		var location = parseGuess(guess);

		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You've sank all my battleships with " + this.guesses + " guesses");
			}
		}
	}
}

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;

	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;

	model.generateShipLocations();
}

function handleKeyPress(e) {
	if (e.keyCode === 13) {
		var fireButton = document.getElementById("fireButton");
		fireButton.click();
		return false;
	}
}

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);

	guessInput.value = "";
}

function parseGuess(input) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (input === null || input.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		let row = alphabet.indexOf(input[0]);
		let column = input[1];

		if (checkPlace(row, column)) {
			alert("Oops, please enter correct letter and a number on the board.");
		} else {
			return row + column;
		}
	}
	return null;	
}

function checkPlace(row, column) {
	return (isNaN(row) || isNaN(column) ||
				(row < 0 || row >= this.model.boardSize) ||
				(column < 0 || column >= this.model.boardSize));
}

window.onload = init;