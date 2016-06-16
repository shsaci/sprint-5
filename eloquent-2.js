// Exercise 1

function rep (s, n) {
  if (n < 0) {
    return " ";
  }
  var arr = Array(n+1).join(s);
  return arr;
}

for (var i = 1; i < 8; i++) {
  var str = "#";
  console.log(rep(str, i));
}


// Exercise 2

var i = 1;
while (i <= 100) {
  // If number is divisible by both 5 & 3
  if (((i % 5) === 0) && ((i % 3) === 0)) {
    console.log("FizzBuzz");
  }
  // If number is divisible by 3 and not 5
  else if (((i % 3) === 0) && ((i % 5) !== 0)) {
    console.log("Fizz");
  }
  // If number is divisible by 5 and not 3
  else if (((i % 5) === 0) && ((i % 3) !== 0)) {
    console.log("Buzz");
  }
  // If none of the above situations, just print number
  else {
    console.log(i);
  }
  i += 1;
}


// Exercise 3

// function to repeat a string
function rep (s, n) {
  if (n < 0) {
    return "Invalid grid size";
  }
  var arr = Array(n+1).join(s);
  return arr;
}
//  declare string pattern, and size variable
var str = " # # # #\n# # # # \n";
var sz = prompt("Please enter required grid size \'x\'");

// checking to make sure grid size is even
if ((sz % 2) !== 0) {
  console.log("Please enter an even number for grid size :)");
}

// invoke string repeat function and display grid
else {
  sz = Number(sz); sz /= 2;
  var ar = rep(str, sz);
  console.log(ar);
}
