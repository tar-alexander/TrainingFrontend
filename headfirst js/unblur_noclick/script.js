function init() {
	// var image = document.getElementById("zero");
	// image.onclick = showAnswer;

	let collection = document.getElementsByTagName("img");
	for (var i = collection.length - 1; i >= 0; i--) {
		collection[i].onmouseover = showAnswer;
		collection[i].onmouseout = showAnswer;
	}

	window.onmousemove = mouseDisplay;
};

function showAnswer(eventObg) {
	var image = eventObg.target;
	changeColor(image);
}

function changeColor(image) {
	if (image.src.indexOf("blur.jpg") != -1) {
		image.src = image.id + ".jpg";
	} else {
		image.src = image.id + "blur.jpg";
	}
}

function mouseDisplay(e) {
	let coordinates = document.getElementById("coordinates");
	let x = e.screenX;
	let y = e.screenY;
	coordinates.innerHTML = "x: " + x + " y: " + y;
}

function reverse(image) {
	changeColor(image);
}

window.onload = init;