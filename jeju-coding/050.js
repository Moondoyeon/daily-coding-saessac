// 버블정렬 구현하기
// 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말함
// 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용

// 입력 4 2 3 8 5
// 출력 2 3 4 5 8

function bubble(str) {
  let arr = str.split(' ').map(n => {return parseInt(n, 10)}) // [4,2,3,8,5]

  let result = arr.slice(); // 원본 배열 복사

  for(let i=0; i<result.length-1; i++){  
    for(let j=0; j<result.length-i; j++){  
      if(result[j] > result[j+1]) {   
        let bigger = result[j];
        result[j] = result[j+1];
        result[j+1] = bigger;        
      }
    }
  }
  return result;
}

console.log(bubble('4 2 3 8 5')) 