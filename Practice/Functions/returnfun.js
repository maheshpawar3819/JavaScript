//higher order function returs example.
//create a factory of the functions

function factory(request) {
  if (request === "odd") {
    let odd = function (num) {
      console.log(num % 2 !== 0);
    };
    return odd;
  } else if (request === "even") {
    let even = function (num) {
      console.log(num % 2 === 0);
    };
    return even;
  } else {
    console.log("wrong request");
  }
}
let request = "odd";


