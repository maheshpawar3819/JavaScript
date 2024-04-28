//here we create the situtations of callback hell

function savetodb(data, resolve, reject) {
  let internetspeed = Math.floor(Math.random() * 10) + 1;
  if (internetspeed > 4) {
    resolve();
  } else {
    reject();
  }
}

savetodb(
  "mahesh pawar",
  () => {
    console.log("success: data saved");
    savetodb(
      "21 years old",
      () => {
        console.log("success2: data saved ");
        savetodb(
          "graduated",
          () => {
            console.log("success3: data saved");
            savetodb(
              "single",
              () => {
                console.log("success4: data was saved");
              },
              () => {
                console.log("fail: data not saved");
              }
            );
          },
          () => {
            console.log("fail: data not saved");
          }
        );
      },
      () => {
        console.log("fail: data not saved");
      }
    );
  },
  () => {
    console.log("fail: data not saved");
  }
);
