{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    //불변성을 유지 = readonly 
    readonly value: string;
    // next: StackNode | undefined;
    readonly next?: StackNode;
    //다음놈을 가리키고 있거나 처음에 들어오는건 없을  수 있으니까

  }

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    // _를 쓰면 내부에서만 쓰이는 변수이고 동일한 이름의 게터가 있구나를 알 수 있음.
    //외부에서는 사이즈를 읽기만 할 수 있고
    //내부에서 변경은 가능함.

    constructor(private capacity: number) {
      //용량을 보통은 받아서 시작함.
    }

    get size() {
      return this._size;
    }

    push(value: string): void {

      if (this.size === this.capacity) {
        throw new Error('Stack is full');
      }

      const node: StackNode = {
        value: value, 
        next: this.head
      }

      this.head = node;
      this._size++;
    }

    pop(): string { //null == undefined, null!== undefined
      if (this.head == null) {
        //null과 undefined 둘다 걸러낼 수 있으.
        throw new Error('Stack is empty!')
      }
      const node = this.head;

      this.head = node.next;
      this._size--;
      return node.value;
    }

  }

  const stack3 = new StackImpl(10);
  stack3.push('Grace 1');
  stack3.push('Bob 2');
  stack3.push('Steve 3');

  while(stack3.size !== 0) {
    // console.log('aaa')
    console.log(stack3.pop());
  }
  // stack3.pop();
  






}