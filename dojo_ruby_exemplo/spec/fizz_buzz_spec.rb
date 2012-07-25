require "fizz_buzz"

describe FizzBuzz do
  
  it "Testa se 1 retorna 1" do
    fizz_buzz = FizzBuzz.new
    retorno = fizz_buzz.say 1
    retorno.should == "1"
  end
  
  it "Testa se 2 retorna 2" do
    fizz_buzz = FizzBuzz.new
    retorno = fizz_buzz.say 2
    retorno.should == "2"
  end
  
  it "Testa se 3 retorna Fizz" do
    fizz_buzz = FizzBuzz.new
    retorno = fizz_buzz.say 3
    retorno.should == "Fizz"
  end
  
  it "Testa se 5 retorna Buzz" do
    fizz_buzz = FizzBuzz.new
    retorno = fizz_buzz.say 5
    retorno.should == "Buzz"
  end
  
  it "Testa se 15 retorna FizzBuzz" do
    fizz_buzz = FizzBuzz.new
    retorno = fizz_buzz.say 15
    retorno.should == "FizzBuzz"
  end
end