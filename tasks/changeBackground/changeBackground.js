function changeBackground() {
	elements = document.getElementsByClassName("square");
	for (let i = 0; i < elements.length; i++) {
  		elements[i].style.backgroundColor = "red";
  	}
}