const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
   let sortedArr = arr.filter(e => e !== -1)
    .sort(function (a, b) {
      return a - b;
    });
  console.log(sortedArr);
  let sortedByHeight = [];
  let count = 0;
  for (element of arr) {
    if (element !== -1) {
      sortedByHeight.push(sortedArr[count]);
      count++;
    }
    else {
      sortedByHeight.push(element);
    }
  }
  return sortedByHeight;
}

module.exports = {
  sortByHeight
};
