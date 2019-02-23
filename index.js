
/**
 * Checks if all values of requiredKeys are available in objKeys
 * @param {string array} objKeys 
 * @param {string array} requiredKeys 
 */
const arrContains = function (objKeys, requiredKeys) {

  // Valdates both input should be array
  if (!(objKeys instanceof Array && requiredKeys instanceof Array)) {
    throw new Error('Invalid Array');
  }

  // Searches for all required keys inside input keys
  for (let i=0; i < requiredKeys.length; i++) {
    if (!objKeys.includes(requiredKeys[i])) {
      return false;
    }
  }

  return true;
};

module.exports = arrContains;