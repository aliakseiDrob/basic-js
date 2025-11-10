const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "--discard-next") {
      i++;
    } else if (array[i] == "--discard-prev") {
      if (result.length !== 0 && array[i - 2] !== "--discard-next") {
        result.pop();
      }
    } else if (array[i] == "--double-next") {
      if (i < array.length - 1) {
        result.push(array[i + 1]);
      }
    } else if (array[i] == "--double-prev") {
      if (i !== 0 && array[i - 2] !== "--discard-next") {
        result.push(array[i - 1]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = {
  transform,
};
