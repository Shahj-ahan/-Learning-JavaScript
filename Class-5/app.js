console.log("Js is working");

// Function
function greeting(){
    console.log("Learning Javascipt");
}
// calling the function
greeting();

//Function with return 
function myfuction(){
    return "Hello world";
}
let result = myfuction();
console.log(result);


// Function with perameter

function Addition(a,b){
    let c = a+b
    return c;
}
let results =Addition(5,5);
console.log(results);

// Function with perameter and return type
function muliply(a,b){
    let c = a*b
    return c;
}
let answer =muliply(5,5);
console.log(answer);


// Function with perameter Celsius to Fahrenheit
function toFahrenheit(Celsius) {
    return (Celsius * 9/5) + 32;
  }
  let value = toFahrenheit(95);
  console.log(value);
  
  // Fahrenheit to Celsius
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  let val = toCelsius(95);
  console.log(val);
  