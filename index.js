// reduce method

//reduce(accumulator,element) : accumulator is-> initially it is first values and then it is result of the recude method and element is the second value and then subsequent values


let nums=[2,3,4,5,1,3];
let max=nums.reduce((x,y)=>Math.max(x,y));
console.log(max);

let min=nums.reduce((x,y)=>Math.min(x,y));
console.log(min);

let sum=nums.reduce(SumOfArr);

function SumOfArr(acc,ele){
    return acc+ele;
}

console.log(sum);

let transactions=[
    {type:"debit",amount:500},
    {type:"debit",amount:1000},
    {type:"credit",amount:500},
    {type:"credit",amount:500},
    {type:"debit",amount:1000},
]

let totalBal=transactions.reduce(calBal,0);

function calBal(acc,transaction){
    if(transaction.type==="debit")
    {
        return acc-transaction.amount;
    }
    else if(transaction.type==="credit"){
        return acc+transaction.amount;
    }
    return acc;
}

console.log(totalBal);