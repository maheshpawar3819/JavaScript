// Question : Remove Duplicate from an array.

// write a function to remove duplicates from an array
// new Set is the function in js with holds a unique values only

// Solution 1 :

const removeDuplicate = (arr) => {
  let remove = new Set(arr);
  return [...remove];
};

console.log(removeDuplicate([1, 8, 7, 2, 1, 9, 7, 6]));
console.log(
  removeDuplicate(["a", "d", "w", "e", "a", "e", "o", "j", "e", "m", "m"])
);
