function pow(number, power) {
	let result = number;
  	while (power > 1) {
  		result *= number;
  		power--;
  	}
  	return result;
}

let x = +prompt("Введите x:");
let n = +prompt("Введите n:");

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}