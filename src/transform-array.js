const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  let newArr = [...arr]
  let finArr = []
  for (let i=0;i<newArr.length;i++){
      console.log(i)
      if (newArr[i]==undefined){
          continue;
      }else if (newArr[0]=='--discard-prev' || newArr[0]=='--double-prev'){
         newArr = newArr.slice(1)
          console.log(`${newArr},  ${finArr} first`)
           i=0;
      }  
      
      if ( typeof newArr[i] == 'number'){
          finArr.push(newArr[i])
          console.log(`${newArr},  ${finArr} second`)
          continue;
      }
      
      if (newArr[i+1]=='--discard-prev'){
          finArr.pop()
          newArr = newArr.slice(i+1)
          i=0;
          console.log(`${newArr},  ${finArr} third`)
      }

      if (newArr[i]=='--discard-next'){
          newArr = newArr.slice(i+2)
          i=0
          console.log(`${newArr},  ${finArr}  any log`)
      } 

      if (newArr[i]=='--double-next' && typeof newArr[i+1] == 'number'){
            finArr.push(newArr[i+2])
          console.log(`${newArr},  ${finArr} four`)
      } 
      
      if (newArr[i+1]=='--double-prev'){
            finArr.push(newArr[i])
            newArr = newArr.slice(i+1)
          i=0
              console.log(`${newArr},  ${finArr}  last log`)
      }
  }
    return finArr
}

module.exports = {
  transform
};
