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

console.log(savedb("hii mahi"));