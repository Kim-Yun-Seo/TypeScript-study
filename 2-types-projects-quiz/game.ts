/**
 * Let's make a game 🕹
 */

const position = { x: 0, y: 0 };

function move (command: string) {
  if (command === 'up') {
    position['y'] += 1;
  } else if (command === 'down') {
    position['y'] -= 1;
  } else if (command === 'right') {
    position['x'] += 1;
  } else if (command === 'left') {
    position['x'] -= 1;
  }
};

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
