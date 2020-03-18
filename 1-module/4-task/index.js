/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
   return (
     str.toLowerCase().includes("1xBet".toLowerCase()) ||
     str.toLowerCase().includes("XXX".toLowerCase())
   );
 }
