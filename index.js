// filter method

let nums=[5,46,3,2,4,5,6];
let evenNums=nums.filter(e=>e%2===0);
console.log(evenNums);

let oddNums=nums.filter(e=>e%2!==0);
console.log(oddNums);

// passing callbacks
evenNums=nums.filter(evenNum);

function evenNum(element)
{
    return element%2===0;
}

console.log(evenNums);

oddNums=nums.filter(oddNum);

function oddNum(element){
    return element%2!==0;
}
console.log(oddNums);

const fruits=["banana","kiwi","promogranate"];
const newFruits=fruits.filter(fruit=>fruit.length<5);
console.log(newFruits);