/**
 * Let's make a calculator 🧮
 */

// type Command = '' | '' | '' | '' | '' | 
function calculate(command: string, x: number, y: number): number {
  if (command === 'add') {
    return x + y;
  } else if (command === 'substract') {
    return x - y;
  } else if (command === 'multiply') {
    return x * y;
  } else if (command === 'divide') {
    return x / y;
  } else {
    return x % y;
  } 
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
// console.log(calculate('aaa', 5, 2)); // wrong command
