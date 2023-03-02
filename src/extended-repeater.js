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
   if (options.addition){
     mystr+= (options.addition+options.additionSeparator).repeat(options.additionRepeatTimes)
   }
  arr.push(mystr)
     if(i!==options.repeatTimes-1){
         arr.push(options.separator)
     } else {continue;}
 } 
 return arr.join('') 
   
}

module.exports = {
  repeater
};

