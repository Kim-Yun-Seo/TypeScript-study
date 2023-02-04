{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
}

class Stack implements Stack {
  //무슨 노드가 있어야함
  //가리키는 것이 저장 되어있음?
  //헤드는 마지막 놈만 가리키고 있으며 될듯.
  private size = 0;
  private box = '';
  private head = '';
  //헤드값만 바꿔주면 될듯.

  constructor(value: string) {
    this.head = value
  }

  push(value: string) {
    //넣는아이
    this.size += 1

  }

  pop() {
    //빼는아이, 뺄거니까 param 필요 없음.
  }
  //LIFO
  // 일정 스택이 있어야함
  // 스택에 무언가를 넣으면 스택이 늘어나고 
  // 넣은 것이 저장이 되어야함
  // 또 다른것을 넣으면 스택이 늘어나고
  // 두번째 넣은 것이 두번째로 저장됨. 
  // pop을 해면 제일 최근에 넣은게 빠짐.
  
}