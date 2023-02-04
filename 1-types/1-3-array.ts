{
  //Array
  const fruits: string[] = ['apple','banana'];
  const scroes: Array<number> = [1, 2, 3];

  //readonly 쓰려면 1번 타입으로 써야함.
  function printArray(fruits: readonly string[]) {

  }

  //Tuple -> interface, type alias, class
  let student: [string, number, number[]];
  student = ['name', 123, [1,2]];
  student[0] //name
  student[1] //123
  //사용권장 하지 않음. 가독성 똥
  const [name, age] = student;
  console.log(age)
}