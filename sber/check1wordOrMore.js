let checkString = (str) => str.includes(" ") ?
	"В строке больше одного слова" :
	"В строке одно слово";

console.log(checkString("Солнечная панель"));