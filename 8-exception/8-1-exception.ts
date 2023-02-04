//Java: Exception
//Javascript: Error
// const array = new Array(10000000000000000000);
//전혀 예상치 못한 에러

//Error handling : try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist') {
    throw new Error (`file not exist ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  //
}

// const fileName = 'file'
const fileName = 'not exist';

try {
  console.log(readFile(fileName))
} catch(error) {
  console.log('catched!')
} finally {
  closeFile(fileName);
  console.log('finally!');
}

function run() {
    const fileName = 'not exist';

  try {
    console.log(readFile(fileName))
  } catch(error) {
    console.log('catched!')
    return;
    //catch가 되면 그냥 리턴을 해서 끝내버림. 밑으로 안 감.
    
  } 
  closeFile(fileName);
  console.log('closed!');
}
run();

// console.log(readFile(fileName));
