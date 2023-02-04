{
  //either = a or b
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {
      //
    }
    //왼오가 같은 타입일 수도 다른 타입 일 수도 있음
    //그건 작성자 마음대로 라서 그렇게 만들어 볼것임.

    left(): L {
      return this.leftValue;
      //constructor 에서 leftvalue를 number로 지정해버리면
      //이 left함수는 무조건 return 을 number로 하게됨 그러면
      //지정을 한게 되니까 에러가 남.
    }

    right(): R {
      return this.rightValue;
    }

  }
  const either = new SimpleEither(4,5);
  //const either: Either<number, number> = new SimpleEither(4,5); 이랑 같은말
  either.left(); //4
  either.right(); //5

  const best = new SimpleEither(4, 'hello'); //가능

  
}