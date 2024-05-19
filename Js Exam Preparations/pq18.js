// You are given a 0-indexed integer array nums and a target element target. A target index is an index i such that nums[i] == target. Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

function targetIndices(nums, target) {
    const indexedNums = nums.map((num, index) => [num, index]); // Create pairs of (value, index)
    
    indexedNums.sort((a, b) => a[0] - b[0]); // Sort based on element values
    
    const targetIndices = [];
    
    for (const [num, index] of indexedNums) {
      if (num === target) {
        targetIndices.push(index); // Collect the indices of target elements
      }
    }
    
    return targetIndices;
  }
  
  // Example
  console.log(targetIndices([5, 6, 3, 4, 7, 1], 3)); // Output: [2]
  console.log(targetIndices([4, 6, 3, 7, 9, 1], 89)); // Output: []
  