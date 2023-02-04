{
  type Success = {
    result: 'success';
    response: {
      body: string;
    }
  }
  type Fail = {
    reason: string;
    result: 'fail';
  };
  type login = Success | Fail;
  function login(id: string, password:string): login{
    let returnObj: login;
    
    if (id === 'altari' && password === '1234') {
      returnObj = {
        result: 'success',
        response: {
          body: 'logged in!',
        },
      }
    } else {
      returnObj = {
        result: 'fail',
        reason: '오류',
      }
    }
    return returnObj;
  }

  function printLoginState(state:login): login {
    if (state.result === 'success') {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }  
    return state;
  }


  console.log(printLoginState(login('altari', '1234')) )
  //api에 공통된 키워드를 넣어서 구별할 수 있게 해서 좋음.
  //result = 'success'같이 둘다 있는게 생기니까 구별하기 좋음
  //response는 success에만 있음.
}