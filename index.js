// map method -- similar to forEach but map returns a new array after processing each element 
// map helps in preserving the original array

let nums=[4,5,3,8,7];

let squaredNums=nums.map((e)=>{
    return e*3;
});

console.log(squaredNums);

let cubedNums=nums.map(cubed);
console.log(cubedNums);

function cubed(element){
    return Math.pow(element,3);
}

nums.map(e=>e*2);// it is mapping but we are not doing anything with that.

console.log(nums);

nums=nums.map(e=>e*2);// now we can see the difference
console.log(nums);


console.log(nums); // didn't change the original array

nums.forEach(e=>e*2); // why is it not changing the original array? see below

console.log(nums);

//here
nums.forEach(changeLikeThis);

function changeLikeThis(element, index, array){
    array[index]=element*2;
}

console.log(nums);// now changed!!!