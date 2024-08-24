//Question : Password validation with using regular expression

//write a fucntion to check given password valid or not

const checkPassword = (pass) => {
  let check = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
    pass
  );
  return check;
};

console.log(checkPassword("mahesh0152"));
console.log(checkPassword("Kiran@1152"));
console.log(checkPassword("Saurabh$48390"));
