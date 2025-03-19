// arrow functions

let nums=[1,2,3,4,5,6];

let sum=nums.reduce((acc,ele)=>acc+ele);
console.log(sum);

let hello=function(){
    console.log("Hello");
}

hello();

setTimeout(()=>{
    console.log("hello timeout");
},3000);

let doubled = nums.map((ele)=>{
    return ele*2;
})

console.log(doubled);

let even = nums.filter((e)=>e%2===0);
console.log(even);