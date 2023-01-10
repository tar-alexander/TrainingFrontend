//Придумайте правильные имена
let myPlanetName = "Earth";
let currentCustomerName;


class Duck {
	constructor(sound) {
		this.sound = sound;
		this.quack = () => console.log(this.sound);
	}
}

var toy = new Duck("quack");
toy.quack();

console.log(typeof Duck);
console.log(typeof toy);
console.log(toy instanceof Duck);

