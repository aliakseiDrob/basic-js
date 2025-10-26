const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let count = 1;
    let max = 1;
    for (let element of array) {
      if (Array.isArray(element)) {
        count += this.calculateDepth(element);
        max = count > max ? count : max;
        count = 1;
      }
    }
    return max;
  }

}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
