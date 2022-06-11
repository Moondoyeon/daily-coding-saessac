// 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

function 제곱을구하자(nums) {
  let arr = nums.split(' ');
  return Math.pow(parseInt(arr[0]), parseInt(arr[1]));
}

console.log(제곱을구하자('2 4')); // 16