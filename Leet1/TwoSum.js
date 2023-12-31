// Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
//and you may not use the same element twice.

// You can return the answer in any order.
var twoSum = function(nums, target) {
  let ans = []; // to store the indices of the two numbers
  for (let i = 0; i < nums.length; i++) { // loop through each element in the array
    for (let j = i + 1; j < nums.length; j++) { // loop through the rest of the array to find the other number
      let sum = nums[i] + nums[j]; // calculate the sum of the two numbers
      if (sum === target) { // check if the sum equals the target value
        ans.push(i); // store the indices of the two numbers
        ans.push(j);
        return ans; // return the answer
      }
    }
  }
  return ans; // if no such numbers exist, return an empty vector
}
