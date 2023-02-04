{
  function checkNotNullBad (arg: number | null): number {
    if (arg === null) {
      throw new Error ('not valid number!');
    }
    return arg;
  } // 이렇게 만들면 리턴이 넘버밖에 안 돼서 타입별로 함수를 따로 만들어줘야함.


  const result = checkNotNullBad(123);
  console.log(result) // 123 이 나옴
  checkNotNullBad(null) //에러

  function checkNotNullAnyBad (arg: any | null): any {
    if (arg === null) {
      throw new Error ('not valid number!');
    }
    return arg;
  } // 이렇게 하는건 타입 보장이 안된다. 타입이 안전하지 않음.
  const result2 = checkNotNullAnyBad(123);

  //이럴때 이용할 수 있는게 제네릭임.
  //어떤 타입이든지 받을 수 있고 쓸 때 타입이 정해져서 보장 받기 가능

  function checkNotNull<T> (arg: T | null): T {
    if (arg === null) {
      throw new Error ('not valid number!');
    }
    return arg;
  } // null이 아닐때에만 받은 것과 똑같은 타입으로 리턴함.

  const number = checkNotNull(123); //이 시점에 이 함수는 넘버를 리턴하는게 정해짐.
  const boal: boolean = checkNotNull(true); // 이렇게도 가능.
  // const boal: string = checkNotNull(true); 이거는 에러남.
  //유연하지만 타입 보장 받기 가능.
}