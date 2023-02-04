{
  //JavaScript
  // old: var = 똥
  //호이스팅 때문에 쓰지 않는 것이 좋음.
  // var age = 5;
  // age = 1;

  // let es6
  let name = 'hello';
  name = 'hi';

  // const
  // javaScript
  // primitive: number, string, boolen, bigInt, symbol, null, undefined
  // object: funciton, array..
  //

  //number
  const num:number = 1;
  //타입명시

  //string
  const str:string = 'hello';

  //boolean
  const boal:boolean = false;

  //undefined
  //뭐가 있는지 없는지도 모름
  // let name: undefined; // 똥
  let age: number | undefined; // 그나마 이용함.
  function find():number | undefined {
    return undefined;
  };

  //null
  //텅텅비워져 있음
  let person: null; //똥
  person = null;
  let person2: string | null;

  // unknown //똥
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  //any //똥
  let anything: any = 0;
  anything = 'hello';

  //void 
  function print(): void { //함수에서 아무것도 리턴하지 않을 때
    console.log('hello');
    return;
  }
  let unusable: void = undefined; //똥

  //never //절대 리턴 불가
  function throwError(message: string): never {
    //message -> server(log)
    throw new Error(message);
    while(true) {

    }
    // return;
  }
  // objecy
  let obj: object; // 모든 obj 타입이 다 들어감 // 똥
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({name:'ellie'});
  acceptSomeObject({animal:'dog'});



}