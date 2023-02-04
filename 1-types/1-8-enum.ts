{
  //Enum

  //Javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const DAY_ENUM = Object.freeze({"MONDAY": 0,"TUESDAY":1,"WEDNESDAY":2})
  const dayOfToday = DAY_ENUM.MONDAY;

  //TypeScript
  type DaysOfWeek = 'Monday' | 'TuesDay';
  enum Days { // 숫자는 자동으로 커지지만 문자열은 하나씩 입력.
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Monday);
  let day:Days = Days.Monday;
  day = Days.Tuesday;
  // day = 10;
  console.log(day); 
}