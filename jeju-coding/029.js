//알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

function 대문자(letter) {
  if(letter === letter.toUpperCase()) {
    return 'YES';
  } else {
    return 'NO';
  }
}

console.log(대문자('a'));
console.log(대문자('A'));