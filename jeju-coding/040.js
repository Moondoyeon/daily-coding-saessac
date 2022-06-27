//모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.
//원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.
// 첫번째 입력: 제한 무게
// 두번째 입력: 함께한 친구들의 수 n
// 세번째 입력: 그 다음 차례대로 탑승할 친구들의 몸무게

// 입력
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// 출력
// 2

function 인원수제한(str) {
  let arr = str.split(' ');
  let i = 2;
  let sum= 0;
  let idx;
  while( sum < parseInt(arr[0])) { //sum: 0 -> 20 -> 20
      sum = sum + parseInt(arr[i]);
      i++; // 3 -> 4 -> 5
      idx =i;
  }
  return idx-3;

}
console.log(인원수제한('50 5 20 20 20 20 20'));

//답안 참고

function 인원수제한2(limit, num, weight){
  let total =0;
  let count =0;
  let limitWeight = parseInt(limit);
  let n = parseInt(num);
  let weightArr= weight.split(' ');

  for(let i=0; i<weightArr.length; i++){
    total += parseInt(weightArr[i]);
    if( total <= limitWeight) {
      count++
    }
  }
  return count;
}

console.log(인원수제한2('50','5','20 20 20 20 20'));
