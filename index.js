function hasTargetSum(array, target) {
  // Write your algorithm here
  const visitedNumbers = [];
  for (let num of array){
    const difference = target - num;
    if (visitedNumbers.includes(difference)){
      return true;

    }
    visitedNumbers.push(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity is linear, where n represents the number of elements
  in the input array.
  As the size of the array increases, the time taken by the function 
  to complete its execution also increases proportionally.
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target):
  visitedNumbers = an empty array

  for each num in array:

  difference = target - num

  if differenence is in visitedNumbers:
  return true

  add num to visitedNumbers

  return false
*/

/*
  Add written explanation of your solution here
  This function checks if any pairs of numbers in the array
  can be added together to equal the target number.
  the function calculates the difference between the target number and the
  current number. if this difference has been visited before
  it means a pair of numbers that adds up to the tarhet number
  has been found, and the function returns true.
  if the difference has not been visited before
  the current number is added to the visited numbers list.
  if no pair of numbers is found that adds up to the target number,
  the function returns false.
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
