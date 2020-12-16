 const isUnique = (value, someString) => {
   let numberOfOccurrences = 0;
   for (let element of someString) {
     if (element === value) {
       numberOfOccurrences++;
       if (numberOfOccurrences > 1) {
         return false
       }
     }
   }
   return true;
 };

 const urlify = (initialString) => {
   const newArray = [];
   for (let element of initialString) {
     if (element === ' ') {
       newArray.push('%', '2', '0');
     } else {
       newArray.push(element)
     }
   }
   return newArray.join('')
 }

 function objectify(stringValue) {
   let newObject = {}
   for (let char of stringValue) {
     if (newObject[char]) {
       newObject[char] += 1
     } else {
       newObject[char] = 1
     }
   }
   return newObject;
 }
 const isPermutation = (stringA, stringB) => {
   const objectA = objectify(stringA)
   const objectB = objectify(stringB)
   for (let key of stringA) {
     if (objectA[key] !== objectB[key]) {
       return false
     }
   }
   return true;
 }

 const isPalinPerm = (textValue) => {
   let trimmedTextValue = textValue.replace(/\s+/g, '');
   let objTextValue = objectify(trimmedTextValue);
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
 }
