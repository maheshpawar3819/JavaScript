//practice of promices

function savedb(data){
    return new Promise((resolve, reject) => {
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            resolve("Success: your data saved");
        }else{
            reject("Fail: your data not saved");
        }
    })
}

 let result=savedb("hii mahi")
.then(() => {
    console.log("promise resolved");
    //you can also print promise here
    // console.log(result);
})
.catch(() => {
     console.log("promise rejected");
    // console.log(result);
})