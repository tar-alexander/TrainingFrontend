function check(firstDiv) {
if (firstDiv.indexOf("<p>") != -1 && firstDiv.indexOf("</p>") != -1) {
	if ((firstDiv.indexOf("<p>") != firstDiv.lastIndexOf("<p>"))
		&& (firstDiv.indexOf("</p>") != firstDiv.lastIndexOf("</p>")))
		return true;
}
return false;
}