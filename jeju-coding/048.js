// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

const 대소문자변환 = (str) => {
  let arr = [];
  let newstr ='';

  for(let i =0; i<str.length; i++) {
    if(str[i] === str[i].toLowerCase()) {
      arr.push(str[i].toUpperCase());
    } else {
      arr.push(str[i].toLowerCase());
    }
  }

  for(let j=0; j<arr.length; j++) {
    newstr = newstr + arr[j];
  }
  return newstr;
}

console.log(대소문자변환('AAABBBcccddd')); //aaabbbCCCDDD
