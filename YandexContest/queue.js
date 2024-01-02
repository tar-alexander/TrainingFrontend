module.exports = {
  queue: [],
  minIndex: Number.MAX_SAFE_INTEGER,
  maxIndex: Number.MIN_SAFE_INTEGER,

  push(x) {
    // Напишите реализацию метода push.
    // Добавляет элемент в очередь.
    if (Number.isInteger(x)) {
    	this.queue.push(x);
    	this.minIndex = (x < this.minIndex) ? x : this.minIndex;
    	this.maxIndex = (x > this.maxIndex) ? x : this.maxIndex;
    }
  },
  shift () {
    // Напишите реализацию метода shift.
    // Возвращает недовольство первого и удаляет его из очереди.
    let deleted = this.queue.shift();
    if (deleted === this.minIndex) {
    	this.minIndex = Math.min.apply(Math, this.queue);
    } else if (deleted === this.maxIndex) {
    	this.maxIndex = Math.max.apply(Math, this.queue);
    };

    return (deleted === undefined) ? 0 : deleted;
  },
  min() {
    // Напишите реализацию метода min.
    // Возвращает минимальное недовольство в очереди.
    return (this.minIndex === Number.MAX_SAFE_INTEGER) ? 0 : this.minIndex;
  },
  max() {
    // Напишите реализацию метода max.
    // Возвращает максимальное недовольство в очереди.
    return (this.maxIndex === Number.MIN_SAFE_INTEGER) ? 0 : this.maxIndex;;
  }
}