﻿let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Calculator() {
	this.read = function() {
		this.a = +prompt("Введите a:", 0);
  		this.b = +prompt("Введите b:", 0);
	}

	this.sum = () => this.a + this.b;
	this.mul = () => this.a * this.b;
}