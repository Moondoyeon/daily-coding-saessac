// set은 어떻게 만드나요?

// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
  var x = new Set('javascript');
// 4)  var x = new Set(range(5));
  var x = new Set();

// 해설
// set이란, 중복되지 않는 데이터를 저장하는 데이터 구조라고 함
// 1번, 2번은 그저 객체를 변수 x에 할당한 것
// 4번 range 함수는 자바스크립트에는 없는 함수이다
