// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
	for (let value in obj) {
		if (obj[value] typeof number) {
			obj[value] *= 2;
		}
	}
}