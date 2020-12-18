const ArrayAndStringMethods = {
  /**
   * @function isUnique
   * @param {string} someText
   * @returns {boolean} True all the characters in the string are unique. False if not
   **/
  isUnique(someText) {
    if (typeof someText !== "string") throw new TypeError(`This function only accepts strings as parameters Your type is ${typeof someText}`);
    if (someText.length === 1) return true
    for (let i = 1; i < someText.length; i++) {
      if (someText[i] !== someText[i - 1]) return false
    }
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
   * @returns {boolean} An object that has the characters of the stringValue as keys and the count of the instances of those characters as values.
   **/
  isPermutation(origin, target) {
    const cataloggedOrigin = catalogCharacterInstances(origin)
    const cataloggedTarget = catalogCharacterInstances(target)
    for (let key of origin) {
      if (cataloggedOrigin[key] !== cataloggedTarget[key]) {
        return false
      }
    }
    return true;
  },
  /**
   * @function catalogCharacterInstances
   * @param {string} stringValue The string whose character instances we want catalogged
   * @returns {Object} An object that has the characters of the stringValue as keys and the count of the instances of those characters as values.
   **/
  isPalinPerm(textValue) {
    let trimmedTextValue = textValue.replace(/\s+/g, '');
    let objTextValue = catalogCharacterInstances(trimmedTextValue);
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
    if (Math.abs(origin.length - target.length) > 1) {
      return false;
    }
    const originObject = catalogCharacterInstances(origin);
    const targetObject = catalogCharacterInstances(target);
    let mismatchCount = 0;
    for (let key of origin) {
      if (originObject[key] !== targetObject[key]) {
        mismatchCount++;
      }
      if (mismatchCount > 1) {
        return false;
      }
    }
    for (let key of target) {
      if (originObject[key] !== targetObject[key]) {
        mismatchCount++;
      }
      if (mismatchCount > 1) {
        return false;
      }
    }
    return true;
  },

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
  }
}
module.exports = ArrayAndStringMethods
