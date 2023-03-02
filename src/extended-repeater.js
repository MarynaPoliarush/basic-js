const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let arr = []
 for(let i=0;i<options.repeatTimes;i++){
     console.log(i)
   let mystr=''
   mystr+= str
   if (options.addition && options.additionSeparator){
     mystr+= (options.addition+options.additionSeparator).repeat(options.additionRepeatTimes-1)
        mystr+= (options.addition).repeat(1)
       console.log(mystr)
   }else if (options.addition && !options.additionSeparator){
     mystr+= options.addition.repeat(options.additionRepeatTimes)
   }else if(!options.addition && !options.separator && i!==options.repeatTimes-1){
      mystr+='+' 
   }
     
    arr.push(mystr)
     if(i!==options.repeatTimes-1){
         arr.push(options.separator)
     }
 } 

if (options.repeatTimes==undefined){
    return str+options.addition
}
 return arr.join('') 
   
}

module.exports = {
  repeater
};

