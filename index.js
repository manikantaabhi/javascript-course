// DOM manipulation

const h1=document.createElement("h1");
h1.textContent="Hello";
h1.style.backgroundColor="black";
h1.style.color="white";
document.body.append(h1);

const li=document.createElement("li");
const li1=document.createElement("li");
li.textContent="Apple";
li1.textContent="Banana";
li.style.listStyleType="number";
document.body.append(li);
document.body.append(li1);

document.body.insertBefore(li,document.getElementById("first"));
