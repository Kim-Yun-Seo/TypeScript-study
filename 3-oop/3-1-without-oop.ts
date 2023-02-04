{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }
  
  const Beans_Gramm_Per_Shot: number = 7;
  let coffeeBeans: number = 0;
  
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * Beans_Gramm_Per_Shot) {
      throw new Error ('Not Enough Coffee Beans!');
    }
    coffeeBeans -= shots * Beans_Gramm_Per_Shot;
    //사용한 만큼 커피콩의 양을 줄여주는 것임.
    return {
      shots: shots, //키와 밸류가 이름이 같다면 생략이 가능함.
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * Beans_Gramm_Per_Shot;
  const coffee = makeCoffee(2);
  console.log(coffee);
}