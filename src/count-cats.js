const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


function countCats(arr) {
  let filteredArr=[]
  for (const item of arr){ 
        for (let i=0;i<item.length;i++){
          
            if (typeof item[i] =='string'){
                console.log(item[i])
                if (item[i].length==2 && item[i].includes('^^')){
                  filteredArr.push(item[i])
                }
            }
        }
  }   

    
   return filteredArr.length
    
  }

module.exports = {
  countCats
};
