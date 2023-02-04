{
  //객체지향의 꽃....
  //상속의 문제점 = 족보가 꼬임
  //상속이 길어질수록 관계가 복잡해짐.
  //상속의 치명적인 것은 부모를 수정하면 모든 자식들에게 영향
  //타입스크립트는 상속은 하나만 가능함.
  //그래서 상속보다는 composition을 사용하는게 좋음.


  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
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
  
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup
  }

  //싸구려 우유 거품기를 만들 것임.
  //인터페이스를 만들어서 구현함.
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
        console.log('steaming... some.. Milk')
    }
    makeMilk(cup: CoffeeCup):CoffeeCup {
      this.steamMilk();
      return {
        ...cup, //모든 커피의 성질을 유지하면서 리턴
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
        console.log('Fancy steaming... some.. Milk')
    }
    makeMilk(cup: CoffeeCup):CoffeeCup {
      this.steamMilk();
      return {
        ...cup, //모든 커피의 성질을 유지하면서 리턴
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
        console.log('Fancy steaming... some.. Milk')
    }
    makeMilk(cup: CoffeeCup):CoffeeCup {
      this.steamMilk();
      return {
        ...cup, //모든 커피의 성질을 유지하면서 리턴
        hasMilk: true,
      };
    }
  }

  //설탕제조기를 만들것.
  class CandySugarMixer implements SugarProvider{
    private getSugar() {
      console.log('Getting some sugar from candy');
      return true; //hasSugar가 불린 값이라 그런듯.
    }

    addSugar(cup: CoffeeCup): CoffeeCup{
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar, 
      };
    }
  }

  class SugarMixer implements SugarProvider{
    private getSugar() {
      console.log('Getting some sugar from candy');
      return true; //hasSugar가 불린 값이라 그런듯.
    }

    addSugar(cup: CoffeeCup): CoffeeCup{
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar, 
      };
    }
  }



  class caffeLatteMachine extends CoffeeMachine {

    constructor(beans: number, public readonly serialNumber: string, private milkFrother: CheapMilkSteamer) {
      super(beans); //이제 여기서 우유거품기를 받아서 사용.
    }

    // private steamMilk(): void {
    //     console.log('steaming... some.. Milk')
    //   } //이제 클래스를 composition 할거니까 이게 필요 없음.

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);

      // this.steamMilk();
      // return {
      //   ...coffee,
      //   shots,
      //   hasMilk: true
      // }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: SugarProvider
      //이제 인터페이스를 만들고 나면 인터페이스를 받아옴.
      ) {
      super(beans);
    }
    //설탕을 어디선가 얻어서 사용
    //설탕과 우유를 주는 클래스가 따로 있다면
    // 필요할때마다 가져가 쓸 수 있어서 좋음.
    // getSugar () { 
    //   console.log('Getting some sugar..!!');
    // }
    // private Sugar(): void {
    //     console.log('putting sugar..')
    //   }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    
    }
  }
  //달달한데 우유까지 들어간 기계를 만들고 싶음.
  //근데 상속은 두개를 못함.
  class SweetCaffeeLatteMachine extends CoffeeMachine {
    constructor(private beans: number, private milk: MilkFrother, private sugar: CandySugarMixer
      ) {
      
      //여기도 이제 설탕클래스를 받아서 사용
      //인터페이스를 만들면 인터페이스를 생성자로 받기.
      super(beans);
      //부모 클래스에 없던게 생겼으닐까 super로 beans를 받아야 사용 가능.
    }
    // 오버라이딩 해서 원하는대로 구현할것임
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee)
      return this.milk.makeMilk(sugarAdded);
      //여기부분 이해가 잘 안 감.
    }
  }

  //milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();


  //sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer()


  const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetMachine = new SweetCoffeeMaker(12, sugar);
  //원하는 용도에 따라서 sweetcoffeemaker을 다르게 만들 수 있음.


  const latteMachine = new caffeLatteMachine(12, 'SS', cheapMilkMaker);
  const sweetLatteeMachine = new SweetCaffeeLatteMachine(12, cheapMilkMaker, candySugar);
  //커피기계들의 성능이 떨어짐. 하나의 종류만 할 수 있음. 예를 들어 싸구려 우유만 사용함, 흰설탕만 사용.
  

  
  // 이 모든 클래스들이 너무 타이트하게 연결되어 있어서
  // 클래스들끼리 너무 친한건 좋지 않음.

  // const machines: CoffeeMaker[] = [
    
  //   new CoffeeMachine(16),
  //   // new caffeLatteMachine(16, '1' ),
  //   // new SweetCoffeeMaker(16),
  //   new CoffeeMachine(16),
  //   // new caffeLatteMachine(16, '1'),
  //   // new SweetCoffeeMaker(16),
  // ];

  // machines.forEach(machine => {
  //   console.log('---------------');
  //   machine.makeCoffee(1);
  // });

  // class Person {
  //   private hiddenProperty: number = 0;
  //   //멤버변수가 없어도 constructer랑 연결이 되어있어서 생략이 가능.
  //   constructor(age: number) {
  //     // this.age = age;
  //   }

  //   get age() {
  //     console.log('get = ', );
  //     return this.hiddenProperty;
  //   }

  //   // set age(value: number) {
  //   //   console.log('set = ', );
  //   //   this.hiddenProperty = value + 1;
  //   // }

  //   // speak(sound) {
  //   //   console.log('aaaaaaaa = ', sound);
  //   //   return sound;
  //   // }
  // }
  // // console.log('Person = ', Person);
  // const aaa = new Person( 20);
  // console.log(aaa)
  // // console.log(' = ', aaa.age);
}