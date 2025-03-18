const incrementBtn=document.getElementById("increment-btn");
const decrementBtn=document.getElementById("decrement-btn");
const resetBtn=document.getElementById("reset-btn");

let count=0;

incrementBtn.onclick=function(){
    count++;
    console.log(count);
    document.getElementById("numPara").innerText=count;
}
decrementBtn.onclick=function(){
    count--;
    console.log(count);
    document.getElementById("numPara").innerText=count;
}
resetBtn.onclick=function(){
    document.getElementById("numPara").innerText=0;
}
