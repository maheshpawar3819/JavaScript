// costructor function

function Square(side) {
    this.side = side;
    this.area = function () {
        return this.side * this.side;
    };
  }
  
  let sqr = new Square(5);
  console.log(sqr);
  console.log(sqr.area());
