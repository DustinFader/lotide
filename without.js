const eqArrays = (array1, array2) => {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else return false;
  return true;
};

const assertArrayEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`❤✅❤ Assertion Passed: ${array1} === ${array2}`);
  } else console.log(`🔴🤔🔴 Assertion Failed: ${array1} !== ${array2}`);
};

const without = (source, itemsToRemove) => {
  let newSource = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        break;
      } else if ((itemsToRemove.length - 1) === j) {
        newSource.push(source[i]);
      }
    }
  }
  return newSource;
};

// const without = (source, itemsToRemove) => {
//   let newSource = []
//   for(let i = 0; i < source.length; i++) {
//     let safe = true;
//     for(let j = 0; j < itemsToRemove.length; j++) {
//       if(itemsToRemove[j] === source[i]){
//         safe = false;
//       }
//     }
//     if(safe){
//       newSource.push(source[i]);
//     }
//   }
//   return newSource;
// }

// const without = function(sourceArray, itemsToRemove){
//   let returnArray = [...sourceArray];
  
//   for (let i = 0; i < returnArray.length; i++) {
//     for(let j = 0; j < itemsToRemove.length; j++) {
//       if(returnArray[i] === itemsToRemove[j]) {
//         returnArray.splice(i, 1);
//         i--; // This line helps with cases when consecutive elements match the itemsToRemove
//       }
//     }
//   }
//   return returnArray;
// }

assertArrayEqual(without([1, 2, 3], [2]), [1,3]); // [1, 3]
assertArrayEqual(without([1,1,1], [1,1,2,3,4]), []);