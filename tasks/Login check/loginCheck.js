let login = prompt("Login:", "Ваш логин");

if (login == "Админ") {
	let pw = prompt("Password:", "Ваш пароль");
	if (pw == "Я Главный") {
		alert("Здравствуйте");
	} else if (pw == '' || pw == null) {
		alert("Отменено");
	} else {
		alert("Неверный пароль");
	}
} else if (login == '' || login == null) {
	alert("Отменено");
} else {
	alert("Я Вас не знаю");
}