{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean; 
    //설탕이 있을수도 없을수도 있게 obtional로 설정
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  } 

  class CoffeeMachine implements CoffeeMaker {
    private static Beans_Gramm_Per_Shot:number = 7;
    protected coffeeBeans: number = 0;
    constructor (coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } 

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }
    clean() {
      console.log('cleaning the machine');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.Beans_Gramm_Per_Shot) {
        throw new Error ('Not Enough Coffee Beans!')
      }
      this.coffeeBeans -= shots * CoffeeMachine.Beans_Gramm_Per_Shot
    }

    private preheat(): void {
      console.log('heating up..!');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  
  class caffeLatteMachine extends CoffeeMachine {

    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
        console.log('steaming... some.. Milk')
      }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      this.steamMilk();
      return {
        ...coffee,
        shots,
        hasMilk: true
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    private Sugar(): void {
        console.log('putting sugar..')
      }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      //일단 커피 만들기
      //오버라이팅 
      return {
        ...coffee, //만들어진커피
        hasSugar: true,
      }
    }
  }

  const machines: CoffeeMaker[] = [
    //coffeeMachine의 배열
    //제일 상위에 있는 coffeemaker의 배열임.
    //다양한 커피 기계가 있는 배열.
    new CoffeeMachine(16),
    new caffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new caffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];
  //다형성의 최고의 장점.

  machines.forEach(machine => {
    console.log('---------------');
    machine.makeCoffee(1);
    //각각 커피를 만들 수 있음.
    //coffeeMachines 배열이 CoffeeMaker로 리턴되기 때문에
    // CoffeeMaker의 인터페이스에 있는 하나의 메소드만
    // 사용 가능. 
  });

  //다형성의 장점은 내부적으로 구현된 다양한 클래스들이 
  // 하나의 인터페이스나 동일한 부모 클래스를 상속받을때
  // 동일한 함수(makecoffee같은)어떤 클래스인지 구분하지 않고
  // 공통된 api를 사용할 수 있다는 것.
  //간편하게 다양한 기능 사용 가능.

}