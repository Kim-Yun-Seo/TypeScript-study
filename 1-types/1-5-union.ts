{
  //union Types : OR

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }

  move('down'); // 미리 띄워줌.
  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //fucntion : login -> success, fail
  type Success = {
    response: {
      body: string;
    }
  }
  type Fail = {
    reason: string;
  }
  type login = Success | Fail;

  function Login(id: string, password:string): login{
    
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  //printLogin
  // success -> body 출력
  // fail -> reason
  function printLogin(state:login) {
    if ('response' in state) {
      console.log(`${state.response.body}`);

    } else {
      console.log(`${state.reason}`);
    }
  }

}