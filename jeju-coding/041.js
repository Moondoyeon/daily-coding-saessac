// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.

function 소수판별(n) {
  if( n <= 1) { return false; }
  if( n % 2 === 0) {
    return false;
  } else if( n % 3 === 0) {
    return false;
  }
  return true;
}
console.log(소수판별(0));
console.log(소수판별(1));
console.log(소수판별(5));
console.log(소수판별(4));
console.log(소수판별(6));
console.log(소수판별(12));

//답안
function check_prime(num) {   //num이 5라면?
  for (let i=2; i<num; i++) {
    const result = num % i;  // 5 % 2 === 1 -->  result = 1
    if (result === 0) {      // 5 % 3 === 2 --> result = 2
      console.log('NO');     // 5 % 4 === 1 --> result = 1
      return false;
    }
  }
  if (num === 1) { 
    console.log('NO');
    return;
  }
  console.log('YES');   // return 
}

check_prime(5);

