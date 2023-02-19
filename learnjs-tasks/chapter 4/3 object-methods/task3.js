let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; //возвращается данный объект, затем можно от него вызвать следующий метод
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};