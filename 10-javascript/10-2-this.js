console.log(this);
// == window 가 this 가 됨.

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
// 둘다 똑같이 window 가 나옴

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
    //여기서 arrow function을 이용하면
    // bind를 안 해줘도 this 가 잘 나옴.
    // counter 라는 것을 알고 있는 것.
  };
}
const counter = new Counter();
counter.increase();
//여기서 this 는 counter 가 된다.

const caller = counter.increase;
// 이걸 하는 순간 this 의 정보를 잃어버림.
//const 로 선언된 caller는 window 안에 선언된것이 아니라서
// caller는 그 어떤 Object 도 아니다.
// 그래서 this 는 undefined 가 된다.
const caller2 = counter.increase.bind(counter);
//bind로 묶어줘야 this가 제대로 나옴.
// 또다른 방법이 있음.
caller();
// 는 undefined 가 나옴.
// const, let 으로 선언하면 윈도우에 등록되지 않는다.
// const, let 을 안 쓰면 윈도우에 등록되서 window.으로 접근 가능.
// var은 window에 등록된다. 재 정의도 가능함. 이래서 사용하지 않는게 좋다.

class Bob {
  //
}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // 일때 this는 무엇일까.
// bob 자체가 된다. run 이라는 함수는 bob 이 불렀기 때문에.
