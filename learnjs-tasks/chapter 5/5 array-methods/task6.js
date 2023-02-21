function Calculator() {

    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b
    };

    this.calculate = function(str) {
      let elements = str.split(" ");
      let a = +elements[0];
      let op = elements[1];
      let b = +elements[2];

      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
       return NaN;
      }
      return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }