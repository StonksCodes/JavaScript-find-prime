/*----------------------------------------------------------------------------------------*/
/*                                                                                        */
/*                ~Really bad prime number finder in JavaScript by Stonks~                */
/*                                                                                        */
/*----------------------------------------------------------------------------------------*/

//call the findprime function and check if the inputed number is prime
findprime(69);

//check if a number is whole or not
function iswhole(number) {
  if (number - Math.floor(number) == 0) {
    return true;
  }
  else {
    return false;
  }
}

//the findprime function, when this is called it will tell us if a number is prime or not
function findprime(numbertocheck) {

  //this prime number finder does not work with negetives or 0 so we rule out everything under 0
  if (numbertocheck <= 0) {
    alert("the number must be above 0");
    return;
  }  
  
  //make sure that the number is not 1 as 1 is not prime
  if (numbertocheck == 1) {
    alert("1 is not prime")
    return;
  }  
  
  //after the loop has run this varible will tell us if the number is prime
  var isprime = true;
  
  //the loop
  for (var i = numbertocheck; i > 0; i--) {
  
    //skip this iteration of the loop if the loop is currently on 1 or the inputed number
    if (i == 1 || i == numbertocheck) {
      continue;
    }
    
    //divide the number by the current index of the loop
    var temp = numbertocheck / i;
    
    //if the result of the division is a whole number set the isprime varible to false and stop the loop
    if (iswhole(temp)) {
      isprime = false;
      break;
    }
  }
  
  //tell the user if the number is prime or not
  if (isprime) {
    alert(numbertocheck + " is prime!");
  }
  else {
    alert(numbertocheck + " is not prime");
  }
}
