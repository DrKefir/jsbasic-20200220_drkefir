/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for (let key in obj) {
    // pri wipolnenii togda budut wnositsja elementi objekta
    return false; // wozwraschaet false
  }
  return true; // inache true objekt pustoj
}
