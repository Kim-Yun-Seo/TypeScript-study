{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker { 
    private static Beans_Gramm_Per_Shot: number = 7;
    private static coffeeBeans: number = 0;
    // private kkk: number = 0;
    
    get coffeeBeans (): number {
      return CoffeeMaker.coffeeBeans;
    } // 이거 써서 볼 수 있음. 

    constructor (coffeeBeans: number) {
      CoffeeMaker.coffeeBeans = coffeeBeans;
      //항상 먼저 호출되는 함수. 
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      // console.log(111)
      const kkk = new CoffeeMaker(coffeeBeans);
      console.log('000',kkk)
      return kkk;
    }

    makeCoffee(shots: number): CoffeeCup {
      
      if (CoffeeMaker.coffeeBeans < shots * CoffeeMaker.Beans_Gramm_Per_Shot) {
        throw new Error ('Not Enough Coffee Beans!');
      }
      CoffeeMaker.coffeeBeans -= shots * CoffeeMaker.Beans_Gramm_Per_Shot;
      //사용한 만큼 커피콩의 양을 줄여주는 것임.
      return {
        shots: shots, //키와 밸류가 이름이 같다면 생략이 가능함.
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(32);
  // console.log('---',maker);
  // console.log('dddd', CoffeeMaker);

  const illy = CoffeeMaker.makeMachine(3);
  // const maker4 = 
  
  console.log('illy ', illy);

  
  
  //이해가 잘 안됨.
  // this.coffeeBeans += 3 * this.Beans_Gramm_Per_Shot;
  // const coffee = this.makeCoffee(2);
  // console.log(coffee);
}