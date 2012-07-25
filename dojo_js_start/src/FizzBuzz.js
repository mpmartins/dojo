function FizzBuzz() {
}

FizzBuzz.prototype.say = function(valor) {
  if ((valor % 3 == 0) && (valor % 5 == 0)) {
  	return "FizzBuzz"
  } else if (valor % 3 == 0) {
    return "Fizz"
  } else if (valor % 5 == 0) {
  	return "Buzz"
  } else {
  	return valor;
  } 
};