// spread operator ...

console.log(Math.max(2,3,4));

let nums=[3,2,5,4];
console.log(Math.max(nums)); // give NaN output

console.log(Math.max(...nums));

console.log(Math.min(...nums));

let x="Manikanta";
console.log(x);
let charsInName=[...x];
console.log(charsInName);

let fruits=["apple","banana","mango"];
let veggies=["beans","potatoes"];

let all=[...fruits,...veggies];
console.log(all);