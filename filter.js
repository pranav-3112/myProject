const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length < 7);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// const array = [30, 8, 2, 3, 4 ,5, 6, 27, 45, 67, 49];
// function isBigEnough(value) {
//     return value <= 10
//   }
  
// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)


// console.log(array.filter(isBigEnough));
//   // filtered is [12, 130, 44]

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); 
// [2, 3, 5, 7, 11, 13]