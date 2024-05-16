// Given a non-empty array of integers nums, every element appears twice except for one. Find that single   one.

let array = [1, 2, 2, 3, 4, 1, 4, 5, 3, 5, 6];

let checkonce = (array) => {
  for (let i = 0; i < array.length; i++) {
    let found = false;
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      return array[i];
    }
  }
  return null;
};
console.log(checkonce(array));
