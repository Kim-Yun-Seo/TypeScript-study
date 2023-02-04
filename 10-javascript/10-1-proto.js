const x = {}
const y = {}
// console.log(' = ', x );
// console.log(' = ', y);
// //모든 오브젝트는 obj라는 프로토를 상속한다(가지고 잇다.)
// console.log(' = ', x.toString());
// console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(' = ', array);
//array 도 다 가지고 있어서 pop, push, length 같은걸 사용할 수 있음.
//array는 Array라는 프로토를 가지고 있어서 거기에[ 있는 api들을 쓰는 것임
//array는 Array를 상속하고 Array는 Object 를 상속받음.

function CoffeeMachine(beans) {
  this.beans = beans;
  //만들어지는 인스턴스 마다 들어있어서
  //instance 레벨 이라고 부름.
  // this.makeCoffee = (shots) => {
  //   console.log('making...');
  // }

}
// 이렇게 하면 Prototype 레벨이 되는 것임.
CoffeeMachine.prototype.makeCoffee = () => {
  console.log('making...')
  // 이렇게 되면 prototype 창을 열어보면 만들어져 있음.
}
//machine 은 coffeemachine을 상속받고 coffeemachine은 Object 프로토를 상속받음

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(10);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
const latte = new LatteMachine(123);
console.log( latte);

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
