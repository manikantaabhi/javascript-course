const checkSel = document.getElementById("checkInput");
const visaRadio = document.getElementById('visa');
const masterRaido = document.getElementById("masterCard");
const payPalRadio = document.getElementById("payPal");
const submitBtn= document.getElementById("submitBtn");

submitBtn.onclick=function()
{
    if(checkSel.checked){
        document.getElementById("checkP").textContent="You are checked!";
    }
    else
    document.getElementById("checkP").textContent="You are not checked!";

    visaRadio.checked?document.getElementById("radioP").textContent="you selected Visa":
    masterRaido.checked?document.getElementById("radioP").textContent="You have seelcted MasterCard":
    payPalRadio.checked?document.getElementById("radioP").textContent="You have selected Paypal":
    document.getElementById("radioP").textContent="You have not selected payment method";


}