/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
 function ucFirst(str) {
   if (!str) return str;
   return str[0].toUpperCase() + str.slice(1);
   }
   let str = prompt("Wwedite slowo: ");
   alert( `Perwaja bukwa izmenena v vaschem slowe na zaglawnuju bukwu:\n${ucFirst(str)}`);
