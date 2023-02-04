{
  // //javascript //똥
  // function jsAdd(num1,num2) {
  //   return num1 + num2;
  // }

  // //typescript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // //javascript
  // function jsFetchNum(id) {
  //   //code
  //   //code
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }  

  // //typescript
  // function tsFetchNum(id: string): Promise<number> {
  //   //code
  //   //code
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }  

  //JavaScript => TypeScript
  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Kim','Yunseo');
  printName('Kim'); //물음표 쓰면 전달해도 되고 안 해도 됨.

  //Default paramter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  //Rest parameter

  function addNumbers(...numbers: number[]) {
    return numbers.reduce((a,b) => a + b)

  }
  console.log(addNumbers(1,2));
  console.log(addNumbers(1,2,3,4));
  console.log(addNumbers(1,2,4,5,6));
}