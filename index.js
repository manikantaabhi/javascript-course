// rest parameters
let x=[3,2,4,5,6];

function myFunc(c,d, ...foods){
    console.log(c);
    console.log(d);
    console.log(...foods);
}
myFunc(...x);

let result=0;
function sum(...numbers){
    for(let number of numbers){
        result+=number;
    }
    return result;
}

console.log(sum(3,4,4,5,6));


function combineStrings(...names){
    return names.join(" ");
}

console.log(combineStrings("Manikanta","Neerugatti"));