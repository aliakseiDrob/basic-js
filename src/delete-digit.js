const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  max = 0;
  let nToString = n.toString();
  for (let i = 0; i < nToString.length; i++) {
    let sliced =
      nToString.slice(0, i) + nToString.slice(i + 1, nToString.length);
    max = max < Number(sliced) ? Number(sliced) : max;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
