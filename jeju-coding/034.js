// sort 구현하기

// 친구들의 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

const 키순서 = (str) => {
  let arr = str.split(' ');
  if(arr.sort().join() === str.split(' ').join()) {
    return 'YES';
  } else {
    return 'NO';
  }
}

console.log(키순서('155 156 165 166 169 176'));
console.log(키순서('176 156 155 165 166 169'));