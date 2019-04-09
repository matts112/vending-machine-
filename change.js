/** 
 * getChange accepts two parameter (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned 
 * @param {number} totalPayable the integer amount (in pennies) to be paid 
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @returns {array} list of coins we need to dispense to the person as change
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */

var coins = [200, 100, 50, 20, 10, 5, 2, 1]
function getChange(totalPayable, cashPaid) {
  var change = [];
  var length = coins.length;
  var remaining = cashPaid - totalPayable;      //reduce this below

  for (var i = 0; i <= length; i++) {  //loop through array if notes & coins:
    var coin = coins[i]

    if(remaining/coin >= 1) {   //check coin fits into the remaing amount 
      var times = Math.floor(remaining/coin);      // no partial coins

      for(var j = 0; j < times; j++) {    // add coin to change x times
        change.push(coin);
        remaining = remaining - coin;   //subtract coin from remaining 
      }
    }
  }
  /*if(cashPaid == 1337) {
    ATM = [20, 10, 5, 2];
    for(var i = 0; i < 18; i++) { ATM.push(100) };
    return ATM;
  }*/
  return change;
};

/* the code below ONLY Applies to Node.js - This Demonstrates re-useability of JS codee in both Back-end 
    and front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange; //allows CommonJS/Node.js require()
}