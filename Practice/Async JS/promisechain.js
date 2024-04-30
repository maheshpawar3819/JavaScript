//practice of promise chaining

function savedb(data) {
  return new Promise((resolve, reject) => {
    let netspeed = Math.floor(Math.random() * 10) + 1;
    if (netspeed > 4) {
      resolve("success: your data saved successfully");
    } else {
      reject("fail:internet speed is very slow");
    }
  });
}

savedb("hii mahesh")
  .then((result) => {
    console.log("data 1 saved");
    console.log(result);
    return savedb("21 years old");
  })
  .then((result) => {
    console.log("data 2 saved");
    console.log(result);
    return savedb("unmarrid");
  })
  .then((result) => {
    console.log("data 3 saved");
    console.log(result);
    return savedb("graduated");
  })
  .then((result) => {
    console.log("data 4 saved");
    console.log(result);
    console.log("Your all information saved successfully");
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log(error);
  });
