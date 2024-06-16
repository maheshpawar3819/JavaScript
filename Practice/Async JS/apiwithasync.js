//with normal function

async function callapi() {
  try {
    let resp = await fetch("https://fakestoreapi.com/products/1");
    let data = await resp.json();
    console.log(data);
  } catch (err) {
    console.log("error", err);
  }
  console.log("i am normal function");
}

callapi();

//with using arrow function
const apicall = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products/1");
    let dt = await response.json();
    console.log(dt);
  } catch (err) {
    console.log(err);
  }
  console.log("i am arrow function");
};

apicall();
