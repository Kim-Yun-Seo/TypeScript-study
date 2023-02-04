{
  interface Employee {
    pay(): void;

  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!!`);
    }

    workFullTime() {

    }
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time!!`);
    }

    workPartTime() {

    }
  }

  //세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 리턴하는건 별로임.
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<E extends Employee> (employee: E): E  {
    // employee.pay 는 제네릭이고 아직 정해진게 없어서
    // 사용할 수 없음.
    // <E extends Employee>로 조건을 사용하면 pay를 사용 가능.
    return employee;
  }

  const grace = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  grace.workFullTime();
  bob.workPartTime();
  // 가능


  const graceAfterPay = payBad(grace);
  const bobAfterPay = payBad(bob);
  // graceAfterPay.workFullTime 은 안됨
  // grace가 다시 employee가 돼서 fulltime이라는 속성을 잃고 그냥 employee가  되기 때문
  //graceAfterPay 이 상태가 되면 full인지 part인지를 알 수가 없어지게 됨
  
  const graceAfterPay2 = payBad(grace) as FullTimeEmployee;
  //이렇게 하면 가능하긴 함. 근데 별로임.
  // 이럴때 제네릭을 사용할 수 읶슴.

  const obj = {
    name: 'Grace',
    age: 20,
  };

  const obj2 = {
    animal: 'dog', 
  };

  // function getValue<V>(objName: V, key: V): V {

  // }
  function getValue<T, K extends keyof T>(objName: T, key: K): T[K]  {
    //키 중에 하나.
    return objName[key];
  }

  console.log(getValue(obj, 'name'));// Grace출력
  console.log(getValue(obj, 'age'));// 20출력





}