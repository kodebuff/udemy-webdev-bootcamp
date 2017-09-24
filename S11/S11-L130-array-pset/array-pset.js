// 1. printReverse()

function printReverse(arrs) {
  for (var i = arrs.length - 1; i >= 0; i--) {
    console.log(arrs[i]);
  }
}


// 2. isUniform()

// //VERSION 1
// function isUniform(arrs) {
//   //store first array to a variable
//   var compareElement = arrs[0];
  
//   for (var i = 1; i < arrs.length; i++) {
//     if (arrs[i] === compareElement) {
//       compareElement = arrs[i];
//       if (i === (arrs.length - 1)) {
//         return true;
//       }
//     } else {
//       return false;
//     }
//   }
// }

// VERSION 2
function isUniform(arrs) {
  //store first array to a variable
  var compareElement = arrs[0];
  for (var i = 1; i < arrs.length; i++) {
    if (arrs[i] !== compareElement) {
      return false;
    }
  }
  return true;
}


// 3. sumArray()

// My Sol
// function sumArray(arrs) {
//   var result = 0;
//   for (var i = 0; i < arrs.length; i++) {
//     result += arrs[i];
//   }
//   return result;
// }

// Colt's solution
function sumArray(arrs) {
  var total = 0;
  arrs.forEach(function(arr) {
    total += arr;
  });
  return total;
}


// 4. max()

function max(arrs) {
  var maxNum = arrs[0];
  for (var i = 1; i < arrs.length; i++) {
    if (arrs[i] > maxNum) {
      maxNum = arrs[i];
    }
  }
  return maxNum;
}