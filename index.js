// Accept user inputs

// let userName;

// userName = window.prompt("What is userName:")
// console.log(userName);


// let userName=window.prompt("wnat is userName");
// console.log(userName);

let userName;
document.getElementById("myButton").onclick=function(){
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent=userName;
}

