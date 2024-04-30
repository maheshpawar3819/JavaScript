//practice of promise chaining

function savedb(data) {
  return new Promise((resolve, reject) => {
    let netspeed = Math.floor(Math.random() * 10) + 1;
    if (netspeed > 4) {
      resolve("success: promise was resolved");
    } else {
      reject("fail:promise was rejected");
    }
  });
}

savedb("hii mahesh")
  .then(() => {
    console.log("data 1 saved");
    return savedb("21 years old");
  })
  .then(() => {
    console.log("data 2 saved");
    return savedb("unmarrid");
  })
  .then(() => {
    console.log("data 3 saved");
    return savedb("graduated");
  })
  .then(() => {
    console.log("data 4 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
