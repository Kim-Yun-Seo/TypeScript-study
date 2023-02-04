{
  type ToDo = {
    title: string;
    description: string;
  }

  function display(todo: ToDo) {
    todo.title = 'jaja'
    //가변성에 수정가능성이 높은 obj를 여기저기 전달하는 건 위험


  }
}