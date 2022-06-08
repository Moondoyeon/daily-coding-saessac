// 별 찍기
// 크리스마스 날, 은비는 프로그래밍으로 트리를 만들기로 합니다. 
// 은비를 위해 프로그램을 작성해 주세요.

// 입력 5
// 출력   
//      *
//     ***
//    *****
//   *******
//  *********

let christmasTree = '*';
let blank = ' ';
for(let i=1; i<=5; i++){
  console.log(blank.repeat(6-i)+christmasTree.repeat(i*2-1));
}
