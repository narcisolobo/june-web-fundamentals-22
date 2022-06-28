/* 
Array Reverse
Write a function that takes in array and returns that SAME array with values reversed. DO NOT create a new array. Perform the reversal "in place".
*/

/* 
PSEUDOCODE:
Create a for loop that stops at the middle of the array.
Inside the for loop, swap the first and last values, then the second and second-to-last, etc.
*/

function easyWay(arr) {
  var newArr = [];
  for (var i = 1; i <= arr.length; i++) {
    newArr.push(arr.pop());
  }
}

function arrReverse(arr) {
  for (let i = 0; i < Math.floor(arr.length/2); i++){
    var start = i;
    var end = arr.length-1-i;
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    console.log('i:' + i + ', arr: ' + arr);
  }
  return arr;
}

console.log(arrReverse([1, 2, 3, 4, 5, 6, 7]));