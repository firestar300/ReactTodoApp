// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(1, 2));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd))

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupA, ...groupB];
//
// console.log(final);

function hi(name, age) {
  return 'Hi ' + name + ', you are ' + age;
}

var person = ['Andrew', 25];
var personTwo = ['Milan', 24];

console.log(hi(...person));
console.log(hi(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Milan', ...names];

console.log(final);
