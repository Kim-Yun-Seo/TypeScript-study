{
  //Type Inference

  let text = 'hello';
  text = '1'; // 숫자타입 쓰면 에러남.
  function print(message: 'hello') {
    console.log(message);
  }

  print('hello');
  print();

  function add(x: number, y:number) {
    return x + y;

  }
}