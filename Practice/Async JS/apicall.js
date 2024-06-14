//api call usinig fetch function 

fetch("https://fakestoreapi.com/products/1").then((response) => {
    console.log(response);
    //it response can not comes in json format thats why we will use next step
    //response convert in json format.
    console.log(response.json());
}).catch((err) => {
    console.log("error was found",err);
})