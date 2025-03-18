//type conversions

let age= window.prompt("How old are you?");
console.log(`Your age is: `+age+2);//concatinates 2 to the input as it takes string values;


// let us convert the input to number/integer


age=Number(age);
console.log(age+2 , typeof age);

let x=5;
let y=Number(x);
console.log(y, typeof y);

y=String(y);
console.log(y,typeof y);

let z="Mani";
let a=Number(z); // Gives NaN 
console.log(a, typeof a);