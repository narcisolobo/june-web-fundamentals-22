var arr2d = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
];

// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

function isPresent2d(arr2d, value) {
  for (let i = 0; i < arr2d.length; i++) {
    for (let j = 0; j < arr2d[i].length; j++) {
      if (arr2d[i][j] == value) {
        return true;
      }
    }
  }
  return false;
}

// complete the following function
function flatten(arr2d) {
  var flat = [];
  // your code here
  return flat;
}

var result = flatten([
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
