// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
var twoSum = function (nums, target) {
  //[] , target - array and number
  //return [index1,index2]
  const map = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const moo = target - nums[i];

    if (moo in map) {
      return [map[moo], i];
    }
    map[nums[i]] = i;
    console.log(map);
  }

  return null;
};

console.log(twoSum([3, 2, 4], 6));
