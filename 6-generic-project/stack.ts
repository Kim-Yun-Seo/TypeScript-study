{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    //불변성을 유지 = readonly 
    readonly value: T;
    // next: StackNode | undefined;
    readonly next?: StackNode<T>;
    //다음놈을 가리키고 있거나 처음에 들어오는건 없을  수 있으니까

  }

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    // _를 쓰면 내부에서만 쓰이는 변수이고 동일한 이름의 게터가 있구나를 알 수 있음.
    //외부에서는 사이즈를 읽기만 할 수 있고
    //내부에서 변경은 가능함.

    constructor(private capacity: number) {
      //용량을 보통은 받아서 시작함.
    }

    get size() {
      return this._size;
    }

    push(value: T) {

      if (this.size === this.capacity) {
        throw new Error('Stack is full');
      }

      const node = {
        //여긴 head에 이미 정확한 타입이 명시 되어 있어서 타입 추론이 가능해서
        //타입 생략이 가능.
        value: value,
        next: this.head
      }

      this.head = node;
      this._size++;
    }

    pop(): T { //null == undefined, null!== undefined
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

  const stack = new StackImpl<string>(10);
  stack.push('Grace 1');
  stack.push('Bob 2');
  stack.push('Steve 3');

  while (stack.size !== 0) {
    // console.log('aaa')
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(123);
  stack2.push(456);
  stack2.push(789);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }

}