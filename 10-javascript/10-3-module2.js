// import add from './10-3-module.js';
//defaault 함수는 이렇게 가져와도 됨.
// import run, { print as printMessage} from './10-3-module.js';
// default 가 아닌 함수는 이렇게 사용해야함.
import * as cal from './10-3-module.js';
//cal 안에 모든걸 받아오겠다.
console.log(cal.add(1,2));
// console.log('bb = ', printMessage());
//모듈화를 하지 않으면 모든것은 global scope로 저장되기 때문에
//html 파일에서 type = 'module' 하고 오면 실행이 안됨.
