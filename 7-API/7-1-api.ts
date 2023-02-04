Array;
[1,2].map;

type Student = {
  passed: boolean;
}
const students: Student[] = [
  {passed: true},
  {passed: true},
  {passed: false}
];
const result = students.every(student => {
  return student.passed;
}) // 한번이라도 false면 every 는 false 가 됨.

console.log(result);
