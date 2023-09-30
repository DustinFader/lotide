const map = (arr, func) => {
  const results = [];
  for (let item of arr) {
    console.log(item);
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"]; 
const words1 = ["clean", "the", "pateo", "to", "not", "slip", "again"]; 
console.log(map(words, word => word[0]));