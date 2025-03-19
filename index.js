//moddules ES6
// even if we import js files using static import it doesn't make big difference because all the imports are loaded initially.
// To make a big difference in loading we need to use them dynamically as used below.

document.getElementById("clickBtn").addEventListener("click",async ()=>{
    const login = await import("./Util.js");
    login.login();
})
document.getElementById("clickBtn2").addEventListener("click",async ()=>{
    const x = await import("./another.js");
    x.logout();
})