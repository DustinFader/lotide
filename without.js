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

module.exports = without;