describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("Testa se 1 retorna 1", function() {
    var retorno = fizzBuzz.say(1);
    expect(retorno).toEqual(1);
  });

  it("Testa se 2 retorna 2", function() {
    var retorno = fizzBuzz.say(2);
    expect(retorno).toEqual(2);
  });

  it("Testa se 3 retorna Fizz", function() {
    var retorno = fizzBuzz.say(3);
    expect(retorno).toEqual("Fizz");
  });
  
  it("Testa se 5 retorna Buzz", function() {
    var retorno = fizzBuzz.say(5);
    expect(retorno).toEqual("Buzz");
  });
  
  it("Testa se 15 retorna FizzBuzz", function() {
    var retorno = fizzBuzz.say(15);
    expect(retorno).toEqual("FizzBuzz");
  });

});