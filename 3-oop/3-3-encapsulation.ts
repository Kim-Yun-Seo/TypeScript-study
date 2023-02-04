{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  //public
  //private
  //protected // 상속한 내부는 가능한데 외부는 불가능
  class CoffeeMaker {
    private static Beans_Gramm_Per_Shot:number = 7;
    protected coffeeBeans: number = 0;
    

    private constructor (coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
      //항상 먼저 호출되는 함수.
    } // 항상 static makeMachine 메소드를 이용하게 권장. 새로 생성이 안되는 뜻

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.Beans_Gramm_Per_Shot) {
        throw new Error ('Not Enough Coffee Beans!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.Beans_Gramm_Per_Shot
      //사용한 만큼 커피콩의 양을 줄여주는 것임.
      return {
        shots: shots, //키와 밸류가 이름이 같다면 생략이 가능함.
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(32);
  // new 할 기회를 막아놓고 밑에 방법으로만 접근할수 있게.
  
  const maker = CoffeeMaker.makeMachine(32);
  console.log('--------',maker)
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = - 3; // (외부설정)이렇게 하면 안되기 때문에 바꿔야함.
  maker.fillCoffeeBeans(3); // 이제 이렇게 커피콩 추가가 가능함.
  console.log('--------',maker);

  class User {
    // private firstName: string;
    // private  lastName: string;
    Fullname: string = `${this.firstName} ${this.lastName}`;
    // get Fullname(): string {
    //   return `${this.firstName} ${this.lastName}`;
    // }
    private internalAge = 4;
    
    get age() : number {
      return this.internalAge;
    } // get 은 무조건 리턴이 있어야함. 물어보면 뱉어내는 애라서 
    // 너 몇살이냐고 물어보면 20살 이라고 물어본 사람한테 알려줘야하지.
    // get을 쓰면 밖에서 불러낼 수 있고
    // get이 아니고 선언을 해서 대입하면 밖에서 바꿀 수 없고
    // get은 불러질 때 소환당할때 실행하기 때문에 밖에서 바꾸면 그 값이 바뀐다.


    set age(num: number) { //set으로 다형성을 사용할 수 있다. 멤버변수만 수정하거나 할 때 사용.
      if (num < 0) {

      }
      this.internalAge = num;
    } // 뱉어내는 애가 아니고 원래 있던 멤버변수의 값을 바꿔주는것. 
    // 너 20살 아니고 지금부터 19살 해. 이러면 멤버변수를 19살로 바꿔주고


    constructor (public firstName: string, private lastName: string) {
      // this.firstName = firstName;
      // this.lastName = lastName;
      //앞에 private을 써서 바로 선언 가능.
    }
  }
  const user = new User('kim','yunseo');
  console.log('-----',user.Fullname);
  user.firstName = 'lee';
  console.log(user.Fullname);
  // //로 바꿔도 원래대로 출력됨.

  // //get을 쓰면 바뀌어서 출력됨.
  // user.age = 6;
  // console.log(user.Fullname);

  // class User2 {
  //   first: string;
  //   last: string;
  //   full: string;

  //   constructor(first: string, last: string) {
  //     this.first = first;
  //     this.last = last;
  //     this.full = `${first} ${last}`
  //   }
  // }
  // const user2 = new User2('kim','yunseo')
  // console.log(user2.full);
  // user2.first = 'lee'
  // console.log(user2.first)
  // console.log(user2.full)
}