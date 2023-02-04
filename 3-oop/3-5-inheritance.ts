{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }
  interface CoffeMaker {
    makeCoffee(shots: number): CoffeeCup;
  } 

  class CoffeeMachine implements CoffeMaker {
    private static Beans_Gramm_Per_Shot:number = 7;
    protected coffeeBeans: number = 0;
    constructor (coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } // 생성자를 public or protected 으로 설정해줘야 상속이 가능함.

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
    private preheat():void {
      console.log('heating up..!')
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
    //오버라이딩 할것.
    //자식 클래스에서 생성자를 구현하면 부모의 생성자를 가져와서 해야함.
    // = super을 써야함.
    constructor(beans: number, public readonly serialNumber: string) {
      //자식에게서 새로운 생성자를 사용하는 경우 꼭 super을 호출해야함.
      //부모가 사용하는 생성자랑 새로운 생성자 둘다 받아야함.
      super(beans);
      //부모것만 super을 쓰면되는듯.
      //readonly는 한번 설정되면 바뀌지 않음.
    }

    private steamMilk(): void {
        console.log('steaming... some.. Milk')
      } //내부적으로 사용되는것 private

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      //super로 바로 부모에 있는 메소드들을 사용할 수 있음.

      this.steamMilk();
      return {
        ...coffee, //부모에게서 만든 커피를 이용함.
        shots,
        hasMilk: true
      }
    }
  }

  const machine = new CoffeeMachine(23);
  //상속만 하고 아무것도 구현하지 않은 상태로 인스턴스해봄.
  const latteMachine = new caffeLatteMachine(23, 'SSSS');
  //상속만 하고 아무것도 구현하지 않은 상태로 인스턴스해봄.

  
  const coffee = latteMachine.makeCoffee(1);
  //latteMachine은 CoffeeMachine을 상속받은 거여서 그 안에 있는 메소드 사용 가능.
  console.log(coffee);
  
  //상속을 잘 사용하면 공통적인 기능은 그대로 재사용하고
  // 자식 클래서에서만 특화된 기능을 추가하고 사용 가능
  // super을 이용해서 부모클래스 에 있는 함수 호출, 접근 가능
  
}