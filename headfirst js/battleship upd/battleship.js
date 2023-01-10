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
	ships: [ { locations: [0, 0, 0], hits: ["","",""], neighbourhood: []},
			 { locations: [0, 0, 0], hits: ["","",""], neighbourhood: []},
		   	 { locations: [0, 0, 0], hits: ["","",""], neighbourhood: []}
	],
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
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
			this.nearby(this.ships[i]);
		}
	},
	generateShip: function() {
		let direction = Math.floor(Math.random() * 2);
		let row, col;
		var newShipLocations = [];

		if (direction === 0) {
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * (this.boardSize));
		} else {
			row = Math.floor(Math.random() * (this.boardSize));
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		}

		for (let i = 0; i < this.shipLength; i++) {
			if (direction === 0) {
				newShipLocations.push((row + i) + "" + col);
			} else {
				newShipLocations.push(row + "" + (col + i));
			}
		}
		
		return newShipLocations;
	},
	nearby: function(ship) {
		let neighbourhood = [];
		let locations = ship.locations;
		for (let i = 0; i < locations.length; i++) {
			for (let x = -1; x < 2; x++) {
				for (let y = -1; y < 2; y++) {
					if (!(x == 0 && y == 0)) {
						let newX = Number(locations[i][0]) + x;
						let newY = Number(locations[i][1]) + y
						if ((!checkPlace(newX, newY)) && ship.locations.indexOf("" + newX + newY) == -1
							&& ship.neighbourhood.indexOf("" + newX + newY) == -1) {
							ship.neighbourhood.push("" + newX + newY);
						}
					}
				}
			}
		}
	},

	collision: function(locations) {
		for (let i = 0; i < this.numShips; i++) {
			let ship = model.ships[i];
			for (let j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0 ||
					ship.neighbourhood.indexOf(locations[j]) >= 0)
					return true;
			}
		}
		return false;
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