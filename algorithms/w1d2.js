var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!
// PSEUDOCODE
// create a for loop that starts 0
// ends at the length of the array (numbers.length)
// increments by 1
// inside the for loop
//    create an if statement that checks if the current value in the array is greater than zero
//    countPositives++

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    countPositives++;
  }
}

console.log("there are " + countPositives + " positive values");
