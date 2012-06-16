class FizzBuzz
  
  def say(valor)
    if (valor % 3 == 0) && (valor % 5 == 0)
      "FizzBuzz"
    elsif (valor % 3 == 0)
      "Fizz"
    elsif (valor % 5 == 0)
      "Buzz"
    else  
      valor.to_s
    end
  end

  
end  