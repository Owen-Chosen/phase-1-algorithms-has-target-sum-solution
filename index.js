function hasTargetSum(array, target) {
  // Write your algorithm here
  let track = new Set()
  for (const num of array) {
    let complement = target - num
    if (track.has(num)) return true
    track.add (complement)
  }
  return false
}

/* 
  Write the Big O time complexity of your function here:

  time complexity = O(n)
*/


/* 
  Add your pseudocode here:

  initialize an empty Set
  iterate over the array of numbers
    return true if the Set includes the complement
  else
    add complement to the set
  return false if true isn't returned after the iteration
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
