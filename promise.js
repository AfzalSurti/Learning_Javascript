// creting a promise that resolves after a delay
function getData(success) {
    return new Promise((resolve, reject) => {
        console.log("promise started");
        setTimeout(()=>{
            if(success){
                resolve("data received");
            }else{
                reject("error occurred");
            }
        },1000);
    });
}


getData(true)
.then((result)=>{
    console.log("Then:",result);
    return "processing data";   
})
.then((msg)=>{
    console.log("Second Then:",msg);
})
.catch((error)=>{
    console.log("Catch:",error);
})
.finally(()=>{
    console.log("Finally always executes");
});
console.log("after promise call");