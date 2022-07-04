// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
// 예를들어
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

function totalSum(num) {
  let arr = String(num).split('');
  let sum = 0;
  for(let ele of arr ) {
    sum = sum + parseInt(ele);
  }
  return sum;
}

console.log(totalSum(18234)); // 18
console.log(totalSum(3849)); // 24

// 답안
function solution(num) {
  let sum = 0;
  while(num !== 0){
    sum += (num % 10);
    num = Math.floor(num/10);
  }
  return sum;
}

// 18234 % 10 = 4  Math.floor(18234/10) = 1823
// 1823 % 10 = 3  Math.floor(1823/10) = 182
// 182 % 10 = 2  Math.floor(182/10) = 18
// 18 % 10 = 8  Math.floor(18/10) = 1
// 1 % 10 = 1  Math.floor(1/10) = 0 --> num = 0, 반복문 종료