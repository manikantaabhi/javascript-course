// number guessing game

const finalNum=Math.ceil(Math.random()*100);
console.log(finalNum);
let attempts=0;
let num=window.prompt("enter your guess between 1 and 100");
attempts++;
while(true)
if(!isNaN(num))
{
        if(num<finalNum)
            num=window.prompt("to low please try entering higher number");
        else if(num>finalNum)
            num=window.prompt("too high please try entering smaller number");
        else
        {
            alert(`Congrats!!!! you won!!! in ${attempts} attempts`);
            break;
        }
        attempts++;
}
else
    num=window.prompt("enter valid number");
