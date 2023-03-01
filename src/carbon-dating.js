const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if ( isNaN(sampleActivity) ){
    return false
  }else if ( typeof sampleActivity == 'string' && sampleActivity.trim().length>0 && +sampleActivity>0 && +sampleActivity<15) {
    return Math.ceil( Math.log(15/Number(sampleActivity) )/(0.693)*5730)
  } else if ( +sampleActivity<0) {
      return false
  }
  return false
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
