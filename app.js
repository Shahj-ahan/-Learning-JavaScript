

console.log(
    'js is working'
);




//  Example of Var
var a = 2;
  a = 4;
var a = 6;

console.log( "Var" +  " " + a );

//  Example of Let
let b = 2;
b = 4;

console.log("Let" +  " " +  b );

//  Example of Const
const c = 10;
console.log('Const' + " " + c)  ;


// Global Scope
{ var n = "name";}
console.log(n);

// Block Scope
{ let e = 5
  const f = 6
}
console.log( e,f ); 


// Hoisting Example
console.log(a);
let a =5;



let obj1 = {
    name :"bilal ",
    age : 30,
 }

console.log(obj1.name="mazz", obj1);

const  obj2 = {
    Name :"bilal ",
    age : 30
}
console.log(obj2 , obj2.email="example.com");

