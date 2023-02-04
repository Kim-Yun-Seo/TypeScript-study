{
  //Type Aliases
  type Text = string;
  const name: string = 'Grace'
  const name2: Text = 'grace';
  const address: Text = 'Korea';
  type Num = number;
  type Student = {
    name: string
    age: number;
  }
  const student: Student = {
    name: 'dog',
    age:  12,
  };

  //String Literal Types
  type Name = 'name';
  let myName: Name;
  myName = 'name' // 이렇게 써야함.
  type JSON = 'json'
  const json: JSON = 'json';
  //상수처럼 쓰임
}