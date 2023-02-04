{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeeCup;
    //설명서같은 것
  } 

  interface CommercialCoffeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void; 
  } 

  //위 인터페이스를 구현하는 클래스라는 뜻.
  class CoffeMachine implements CoffeMaker, CommercialCoffeMaker {
    private static Beans_Gramm_Per_Shot:number = 7;
    protected coffeeBeans: number = 0;

    private constructor (coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } 

    static makeMachine(coffeeBeans: number): CoffeMachine {
      return new CoffeMachine(coffeeBeans);
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
      if (this.coffeeBeans < shots * CoffeMachine.Beans_Gramm_Per_Shot) {
        throw new Error ('Not Enough Coffee Beans!')
      }
      this.coffeeBeans -= shots * CoffeMachine.Beans_Gramm_Per_Shot

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

  class AmateurUser {
    constructor(private machine: CoffeMaker) {
      
    }
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class proBarista {
    constructor(private machine: CommercialCoffeMaker) {
      
    }
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }
  const maker = CoffeMachine.makeMachine(32);
  // maker.fillCoffeeBeans(3); 
  // maker.makeCoffee(2);

  //외부에서 부르면 안되는 함수들을 private으로 바꿔줌.
  
  // const maker2: CommercialCoffeMaker = CoffeMachine.makeMachine(32);
  // // maker2.fillCoffeeBeans(3); //coffeeMaker에는 존재하지 않는 api라서 에러?
  // maker2.makeCoffee(2);
  // maker2.fillCoffeeBeans // 수정하면 이제 가능.
  // maker2.clean()

  const amateur = new AmateurUser(maker);
  const pro = new proBarista(maker);  
  pro.makeCoffee();

  //시간 주어 목적어 순서
  //실행 했을때 읽기 그 전에 미리 읽으면 헷갈리고 어려웡
  //get set 인지 멤버변수인지 뭐 다양한 가능성을 다 열어놓고 생각하고
  // . 이나 = 같이 아주 작은 것들도 해석하기
  //그래 다 찍어봐요....

}