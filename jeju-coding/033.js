// 거꾸로 출력하기

//입력 : 2 4 6 7 8
//출력 : 8 7 6 4 2

const 거꾸로 = (nums) => {
  return nums.split(' ').reverse().join(' ')
}
console.log(거꾸로('2 4 6 7 8')) // 8 7 6 4 2


// const data = prompt('숫자를 입력하세요.').split(' ').reverse();
// const result = '';

// for (let i=0; i<data.length; i++){
//   result += data[i];
// }

// console.log(result);