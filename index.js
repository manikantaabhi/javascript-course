// temperature converter

const inputNum=document.getElementById("inputNum");

const toF=document.getElementById("toFahrenheit");
const toC=document.getElementById("toCelsius");
const para=document.getElementById("convertedPara");

let temp;


function convert(){
    if(toF.checked){
        temp=Number(inputNum.value);
        temp=temp*9/5+32;
        para.textContent=temp.toFixed(1)+"°F";
    }
    else if(toC.checked){
        temp=Number(inputNum.value);
        temp=(temp-32)*(5/9);
        para.textContent=temp.toFixed(1)+"°C";
    }
    else
        para.textContent="Please select conversion type";
}