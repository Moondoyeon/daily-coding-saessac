// 반장 선거
// 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

function 선거(votes){
  let selected ='';
  let mostcounted = 0;
  let obj = {};
  let arr= votes.split(' ');
  for(let i = 0; i< arr.length; i++){
    if(!(arr[i] in obj)){
      obj[arr[i]]=0;
    } 
    obj[arr[i]]++;

    if( obj[arr[i]]>mostcounted){
      mostcounted = obj[arr[i]];
      selected = arr[i]
    }
  }
  return `${selected}이가 총 ${mostcounted}표로 반장이 되었습니다.`
}

console.log(선거('원범 원범 혜원 혜원 혜원 혜원 유진 유진'));

// 답안
// const array = prompt('이름을 입력해주세요.').split(' '); //(8) ['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진']
// let result = {};
// let winner = "";

// for(let index in array){ // index는 말그대로 인덱스번호
//   let val = array[index]; // val에 이름을 대입
//   result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1; //객체에 키에 대한 밸류가 없으면 1, 있으면 +1
// }

// winner = Object.keys(result).reduce((a,b)=> {  // Object.keys(result) = (3) ['원범', '혜원', '유진']
//   return result[a] > result[b]? a:b           // (a, b) 원범 혜원 -> 혜원 유진
// })