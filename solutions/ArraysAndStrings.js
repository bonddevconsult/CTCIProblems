const ArrayAndStringMethods = {
  /**
   * @function isUnique
   * @param {string} someText
   * @returns {boolean} True all the characters in the string are unique. False if not
   **/
  isUnique(someText) {
    if (typeof someText !== "string") throw new TypeError(`This function only accepts strings as parameters Your type is ${typeof someText}`);
    if (someText.length === 1) return true
    characterCatalog = this.catalogCharacterInstances(someText)
    if (Object.values(characterCatalog).some(characterCount => characterCount > 1 )) return false
    return true;
  },
  /**
   * @function urlify
   * @param {string} someText
   * @returns {string} A string where all the ' ' characters are replaced with %20. Does not account for other whitespace characters like tabs or new lines
   **/
  urlify(someText) {
    if (typeof someText !== "string") throw new TypeError(`This function only accepts strings as parameters. Your type is ${typeof someText}`);
    const newArray = [];
    for (let element of someText) {
      if (element === ' ') {
        newArray.push('%', '2', '0');
      } else {
        newArray.push(element)
      }
    }
    return newArray.join('')
  },

  /**
   * @function catalogCharacterInstances
   * @param {string} stringValue The string whose character instances we want catalogged
   * @returns {Object} An object that has the characters of the stringValue as keys and the count of the instances of those characters as values.
   **/
  catalogCharacterInstances(stringValue) {
    if(typeof stringValue !== "string") throw new TypeError(`This function only accepts strings as parameters. Your type is ${typeof stringValue}`);
    let catalog = {}
    for (let characterInstance of stringValue) {
      if (catalog[characterInstance]) {
        catalog[characterInstance] += 1
      } else {
        catalog[characterInstance] = 1
      }
    }
    return catalog;
  },
  /**
   * @function isPermutation
   * @param {string} origin
   * @param {string} target
   * @returns {boolean} True if the target is a permutation of the of the origin. False otherwise.
   **/
  isPermutation(origin, target) {
    if(typeof origin !== "string" || typeof target !== "string") throw new TypeError(`This function only accepts strings as parameters. Your types are {origin: ${typeof origin}, target: ${typeof target}}`);
    const cataloggedOrigin = this.catalogCharacterInstances(origin)
    const cataloggedTarget = this.catalogCharacterInstances(target)
    for (let key of origin) {
      if (cataloggedOrigin[key] !== cataloggedTarget[key]) {
        return false
      }
    }
    for (let key of target) {
      if (cataloggedTarget[key] !== cataloggedOrigin[key]) {
        return false
      }
    }
    return true;
  },
  /**
   * @function isPalinPerm
   * @param {string} stringValue The string whose character instances we want catalogged
   * @returns {Object} An object that has the characters of the stringValue as keys and the count of the instances of those characters as values.
   **/
  isPalinPerm(textValue) {
    let trimmedTextValue = textValue.replace(/\s+/g, '');
    let objTextValue = this.catalogCharacterInstances(trimmedTextValue);
    let oddInstances = 0;

    for (let key of trimmedTextValue) {
      if (trimmedTextValue.length % 2 === 1) {
        if (oddInstances > 1) {
          return false;
        }
        if (objTextValue[key] % 2 === 1) {
          oddInstances++;
        }
      } else {
        if (objTextValue[key] % 2 === 1) {
          return false
        }
      }
    }
    return true
  },

  /**
   * @function oneAway
   * @param {string} origin
   * @param {string} target
   * @returns {boolean} True if there is one or fewer character differences between the two strings. False if more than one
   **/
  oneAway(origin, target) {
    if(typeof origin !== "string" || typeof target !== "string") throw new TypeError(`This function only accepts strings as parameters. Your types are {origin: ${typeof origin}, target: ${typeof target}}`);
    if (Math.abs(origin.length - target.length) > 1) {
      return false;
    }
    const originObject = this.catalogCharacterInstances(origin);
    const targetObject = this.catalogCharacterInstances(target);
    let mismatchCount = 0;
    for (let key of Object.keys(originObject)) {
      if (originObject[key] !== targetObject[key]) {
        mismatchCount++;
      }
      if (mismatchCount > 1) {
        return false;
      }
    }
    for (let key of Object.keys(targetObject)) {
      if(!(originObject.hasOwnProperty(key))){
        mismatchCount++;
      }
      if (mismatchCount > 1) {
        return false;
      }
    }
    return true;
  },

  /**
   * @function stringCompression
   * @param {string} sometext
   * @returns {string} A compressed version of the string. where the sequential instance count of a letter appears before the letter. However, If the original string is shorter, then it will just return that
   **/
  stringCompression(someText) {
    if (someText.length > 2) {
      let currentCharacter = someText[0];
      const compressedTextArray = [currentCharacter];
      let instancesOfTheCurrentCharacter = 1;
      let counter = 1;
      for (let i = 1; i < someText.length; i++) {
        if (someText[i] === currentCharacter) {
          instancesOfTheCurrentCharacter++;
          if (i === someText.length - 1) {
            compressedTextArray.push(instancesOfTheCurrentCharacter);
          }
        } else {
          compressedTextArray.push(instancesOfTheCurrentCharacter);
          currentCharacter = someText[i];
          instancesOfTheCurrentCharacter = 1;
          if (i === someText.length - 1) {
            compressedTextArray.push(currentCharacter);
            compressedTextArray.push(instancesOfTheCurrentCharacter);
          }
        }
      }
      if (someText.length <= compressedTextArray.length) {
        return someText;
      } else {
        return compressedTextArray.join('')
      }
    }
    return someText
  },
  /**
  *@function rotateMatirx
  *@param {Array} origin Where origin is an array of of arrays representing an NXN Matrix
  *@returns {Array} A new array that is the same as the original but rotated 90 degrees
  **/
  rotateMatrix(origin){
    if(!origin) throw new Error('Invalid parameters. Origin is empty')
    if(origin[0].length < 1) throw new Error('Invalid Parameters. There are no columns in the first row of the origin matrix')
    for(let row of origin) {
      if(row.length !== origin.length) {
        throw new Error('Invalid Parameters. This function only accepts NXN arrays')
      }
    }
    if(origin.length === 1 && origin[0].length === 1) return origin
    const newMatrix = [];
    let newRow = [];
    let column = 0;
    while(column < origin.length) {
      newRow = [];
      for(let row of origin) {
        newRow.unshift(row[column]);
      }
      newMatrix[column] = newRow;
      column++;
    }
    return newMatrix
  }
}
module.exports = ArrayAndStringMethods
