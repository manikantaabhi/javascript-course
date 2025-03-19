// callback


Hello(GoodBye);
function Hello(callback)
{
    console.log("Hello");
    callback();
}
function GoodBye(){
    console.log("Good Bye!");
}
// Callbacks are very much useful in eventListeners.(why?: Understand eventListeners first)
/* we might get this thought of 
  what if we add setTimeInterval 
  to console.log in Hello function? */