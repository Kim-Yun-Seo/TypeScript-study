{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  }

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    //todo 타입에 있는 것들중에 부분적으로만 받을 수 있ㄹ음
    return {...todo, ...fieldsToUpdate};
  }

  const todo: ToDo = {
    title: 'learn Typescript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  }

  const update = updateTodo(todo, {priority: 'low'})
  console.log(update);

  //이렇게 하면 바뀐 새로운 아이가 출력됨.
  //기존의 데이터는 유지하고 priority만 바뀜.
  //partial은 기존의 타입중에서 부분적으로만 수정할때 사용함.
}