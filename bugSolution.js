function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(5, '5')); // Output: 10

function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error("Invalid input: both arguments must be numbers.");
    return null; //Or handle the error appropriately
  }
}
console.log(foo(5, '5')); //Output: Invalid input: both arguments must be numbers.