// forEach loop

let numbers=[3,4,5,1,2];
numbers.forEach((element,index,numbers) => console.log(element+" "+index+" "+numbers));

function double(element, index,numbers){
    numbers[index]=element*2;
}
numbers.forEach(double);
numbers.forEach(element=>console.log(element));

function cubed(element, index,numbers){
    numbers[index]=Math.pow(element,3);
}

numbers.forEach(cubed);
numbers.forEach(element=> console.log(element));


/* forEach method by default provides 3 values on call->
    element(current element), index(index of the current element)
    array(entire array) */

/* so if we call any callback emthod inside forEach it internally passes 3 parameters (current element, index of the current element, and the array itself) */
