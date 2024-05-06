// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// example: input:[1,2,3,4,3,1,4] output: 2
// input:[5,6,7,8,7,6,8] output:5

function findSingleNumber(nums) {
  for (let num of nums) {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      return num;
    }
  }
}

console.log(findSingleNumber([1, 2, 3, 4, 3, 1, 4, 2, 10]));
console.log(findSingleNumber([5, 6, 7, 8, 7, 6, 8]));
console.log(findSingleNumber([10, 2, 3, 4, 5, 6]));
