{
  type Video = {
    title: string;
    author: string;
    description?: string;
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // }

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // }

  // [1,2].map(item => item * item);
  //map 타입을 사용하면 기존의 타입을 다른 타입으로 변형이 가능함.
  type Optional<T> = {
    //받아오는 T타입을 이용해서 재사용을 한다.
    [P in keyof T]? : T[P] // for ...in 과 같이 사용됨.
    //for... in ==> object 안에 있는 key들을 하나씩 도는 연산자임.
    //뭔소리여;;;

  }

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
    //이 타입의 obj는 이제 안에 있는 데이터가 변경이 안됨.
  }

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hi',
    // animal 이런건 에러가 남.
  }

  type Animal = {
    name: string;
    age: number;
  }

  const animal: Optional<Animal> = {
    name: 'dog',
    //이렇게 이름만 있고 나이는 없어도 에러가 안 남.
  }

  animal.name = 'grace' //는 가능

  const video: ReadOnly<Video> = {
    title:'hi',
    author:'grace'
  }; 
  
  // video.autho = 'hello' 는 에러남.

  //하나가 바뀌면 계속 다 바꿔야함.

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null, //이렇게 하면 nULL 도 사용 가능.
    author: null,
  }

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  }

}