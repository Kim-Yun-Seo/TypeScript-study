{
  // Type Assertions = 똥

  function isStrFun(): any {
    return 'hello';
  }

  const result = isStrFun();
  //result는 아직 문자열이 아닌 any타입이라서 length같은 
  //api를 쓸 수 없음.
  console.log((result as string).length);
  //이렇게 하면 가능
  (<string>result).length

  // const wrong: any = 5;

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  // addNumbers.push(2) -> undefined 일수도 있으니까 에러남.
  const numbers = findNumbers();
  numbers!.push(2) // 진짜진짜 확신하면 느낌표 붙이기. = 똥

  // const button = document.querySelector('class');
  // button?.nodeValue
  // if (button) {
  //   button.nodeValue;
  // }
}