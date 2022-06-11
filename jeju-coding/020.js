// 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입력 : 10 2
// 출력 : 5 0

function 몫과나머지(nums) {
  let arr = nums.split(' ');
  let a = Math.floor(parseInt(arr[0]));
  let b = Math.floor(parseInt(arr[1])); 
  return `${a/b} ${a%b}`
}

console.log(몫과나머지('30 6')); //5 0