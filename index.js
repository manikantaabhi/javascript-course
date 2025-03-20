// Promises with reject
function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("not executed");
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

walkDog()
        .then(value=> {
            console.log(value);
            return cleanKitchen()})
        .then(value=>{
            console.log(value);
            return dumpTrash()})
        .then(value=>{
            console.log(value);
        })
        .catch(()=>console.log("ther is some error"));
