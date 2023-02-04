{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // 공통점
  // 두개가 object 타입으로 만들 수 있음
  const obj1 : PositionType =  {
    x: 1,
    y: 1,
  }

  const obj2 : PositionInterface =  {
    x: 1,
    y: 1,
    z: 1,
  }
  

  //공통점 2: 둘다 클래스에서 구현이 가능함.

  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  //공통점3: extends 가능

  interface Zposition extends PositionInterface {
    z: number;
  }

  type ZpositionType = PositionType & {z: number};
  //intersection 사용해서 확장 가능.

  // 차이점: interface만 merged 할 수 있음.
  interface PositionInterface {
    z: number;
    //이렇게 뒤에서 정의를 또 하면 합쳐져서 이 다음부터는
    //z까지 포함해서 사용해야함.
    //타입은 이런식으로 안됨.
  }

  //차이점: type만 computed properties 사용 가능
  type Person = {
    name: string,
    age: number,
  }
  type Name = Person['name']; //== string type
  //이런식으로 골라내서 타입지정 가능함.
  
  //차이점2: type 만 Union 타입을 사용 가능함.

}