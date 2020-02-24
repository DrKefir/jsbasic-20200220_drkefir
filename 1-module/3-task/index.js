/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
 use strict
  function ucFirst(str) {
    if (!str) return str;
    alert( `Perwaja bukwa " ${str[0]} " izmenena v vaschem slowe na zaglawnuju bukwu:\n${str[0].toUpperCase()+str.slice(1)}`);
    }
    let str = prompt("Wwedite slowo: ");
    ucFirst(str);
