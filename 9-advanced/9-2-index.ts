{
  const obj = {
    name: 'grace',
  }

  obj.name; // grace
  obj['name']; //grace

  //타입도 인덱스를 기반으로 사용할 수 있음.
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female'
  }

  type Name = Animal['name'];
  //Name의 타입이 string 타입이 됨.
  const text: Name = 'hello'

  type Genger = Animal['gender'] //'male' | 'female'
  type Keys = keyof Animal;
  //Animal 에 있는 모든 타입을 Keys 가  union 타입으로 다 할당받을 수 있음.
  const key: Keys = 'gender'

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person = {
    name: 'grace',
    gender: 'female'
  }
}