//2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 

// 입력
// Javascript

// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

const twoGram = (str) =>{

  for(let i =0; i<str.length-1; i++){
    console.log(`${str[i]} ${str[i+1]}`);
  }

}

(twoGram('Javascript'));