// 거꾸로 출력하기


//입력 : 1 2 3 4 5
//출력 : 5 4 3 2 1

//입력 : 2 4 6 7 8
//출력 : 8 7 6 4 2

const data = prompt('숫자를 입력하세요.').split(' ').reverse();
const result = '';

for (let i=0; i<data.length; i++){
  result += data[i];
}

console.log(result);