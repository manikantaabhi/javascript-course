// Async/Await with reject
function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("You walk the dog");
        },1500)
    })
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("clean the kitchen");
        },2500)
    })
}

function dumpTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("dump the trash");
        },500)
    })
}

async function performTasks()
{
    const walk=await walkDog();
    console.log(walk);

    const clean=await cleanKitchen();
    console.log(clean);

    const dump=await dumpTrash();
    console.log(dump);

    console.log("you have completed all the tasks")
}

performTasks();