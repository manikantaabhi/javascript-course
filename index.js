// call back hell if there are more than 4 nested callbacks like this
function walkDog(callback){
    setTimeout(()=>{
        console.log("walk the dog");
        callback();
    },1500)
    
}

function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("clean the kitchen");
        callback();
    },2500)
}

function dumpTrash(callback){
    setTimeout(()=>{
        console.log("dump the trash");
        callback();
    },500)
}

walkDog(()=>{
    cleanKitchen(()=>{
        dumpTrash(()=> console.log("you have completed all tasks"))
    })
});