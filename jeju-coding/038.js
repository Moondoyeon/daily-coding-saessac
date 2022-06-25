// # 문제38 : 호준이의 아르바이트

// 호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 
// 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 
// 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// **학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

// 1.입력받은 문자열을 공백기준으로 구분 후 배열로 리턴한다. split(' ')
// 2.원소들을 오름차순 정렬한다. 
// 3.배열에서 중복을 제거한 새배열을 생성한다.
// 4.새배열의 뒤에서 3개의 수를 1,2,3위로 변수에 저장한다.
// 5.2의 배열에서 1위를 찾고 count를 센다. -> 2위를 찾고 count를 센다. -> 3위를 찾고 count를 센다.

function 수상자(str) {
  let arr = str.split(' ').sort() // ['55', '66', '75', '85', '86', '95', '97', '97', '97', '97']
  newarr = arr.filter(( ele, i ) => arr.indexOf(ele) === i) // ['55', '66', '75', '85', '86', '95', '97']
  let first = newarr[newarr.length-1]
  let second = newarr[newarr.length-2]
  let third = newarr[newarr.length-3]
  let count = 0;
  for (let el of arr) {
    if(el === first || el === second || el === third) {
      count++
    }
  }
  return count;
}

console.log(수상자('97 86 75 66 55 97 85 97 97 95')) // 6
console.log(수상자('97 86 75 66 55 97 85 97 97 95 97 86 95 95')) // 10

// 답안
const 답안 = (str) => {
  const scores = str.split(' ').map( n => parseInt(n, 10) ); // [97, 86, 75, 66, 55, 97, 85, 97, 97, 95]
  scores.sort( (a,b) => { a-b } ); // [55, 66, 75, 85, 86, 95, 97, 97, 97, 97]

  let count2 = 0;
  let arr = [];
  
  while (arr.length < 3) {  // arr = [97] -> [97, 95] -> [97, 95, 86]
    let n = scores.pop()    // 결과적으로 scores는 [55, 66, 75, 85]
    if (!arr.includes(n)) {
      arr.push(n);
    }
    count2 += 1; // count 2 = 1 -> 2 -> 3 -> 4 -> 5 -> 6
  }
}