const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
  calculateDepth(arr){
    let counter = 1;
    function recur(item){
      for (let i=0;i<item.length;i++){
        if (typeof item[i]!=='object'){
          continue;
        } else if (typeof item[i]=='object'){
          counter++
          recur(item[i])
        }
      }
    }
    recur(arr)
    return counter
  }
}

module.exports = {
  DepthCalculator
};
