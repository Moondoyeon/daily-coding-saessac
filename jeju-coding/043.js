// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

function 진수(num) {
  let result='';
  let divide=[];

  while(num){
    divide.push(num % 2);
    num = parseInt(num / 2, 10);
  }
  divide.reverse();

  divide.forEach((n) => {
    result = result + n;
  })
  
  return result;
}

console.log(진수(11));
// num = 11이라면 ---> 1101 -(역정렬)-> 1011
// 11/2 = 5, 1
// 5/2 = 2, 1
// 2/2 = 1, 0
// num을 2로 나눈다. 몫을 따로 저장한다. 나머지를 따로 저장한다
// 몫을 2로 나눈다. 몫을 따로 저장한다. 나머지를 따로 저장한다.
// 몫을 2로 나눈다. 몫을 따로 저장한다. 나머지를 따로 저장한다. 
// 어차피 result의 첫번째 수가 1
// 몫이 1이 될때까지 반복한다.