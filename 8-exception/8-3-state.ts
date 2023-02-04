{

  class TimeoutError extends Error  {}
  class OfflineError extends Error {}
  
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  }
  type SuccessState = {
    result: 'success';
  }

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {
      //
    }

    login() {
      // this.client.tryConnect();
      //login.. 에러를 잡아야 하는 곳은 여기임. 여기서 처음 tryconnect 를 사용해서
      try {
        this.client.tryConnect();
      } catch (error) { //이 에러는 any타입임.
        //catch로 error을 받는순간은 바로 any타입이 돼버림.
        console.log('catched!');
      }
    }
    //정확하게 우아하게, 에러를 캐치하지 못할거라면 그냥 하지마삼.
    //login에서 어정쩡하게 하지 말고 처리할 수 잇는 app 클래스에서 처리하는게 나음.
  }

// const client = new NetworkClient();
// const service = new UserService(client);
// service.login();

  class App {
    constructor(private userService: UserService) {
      //
    }
    run() {
      this.userService.login();
      //어플이 시작되면 자동으로 로그인되는 클래스

      //여기서 하는 에러처리가 실행될떄 하는거라 더 의미가 있음.
      //위에서 하면 에러가 났는지 app은 알 수가 없기 때문에.
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
  //에러창에서 어디서 어떻게 어느 순서로 에러가 났는지를 확인할 수 있음.
}