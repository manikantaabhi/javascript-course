 // array

 let fruits=["apple","banana","orange"];

//  fruits.unshift("berry");
//  fruits.shift();
//  fruits.push("berry");
//  fruits.pop();
let noOfFruits=fruits.length;
let index=fruits.indexOf("banana");

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

fruits.forEach(element => {
    console.log(element);
});

for(let fruit of fruits)
    console.log(fruit);

fruits.sort();
console.log(fruits);
fruits.sort().reverse();
 console.log(fruits);