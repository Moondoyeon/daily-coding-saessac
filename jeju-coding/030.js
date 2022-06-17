// 문자열 속 문자 찾기

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

// 입력
// pineapple is yummy
// apple

// 출력
// 4

const 문자찾기 = (a,b) => {
  return a.search(b);
}
console.log(문자찾기('pineapple is yummy', 'apple'));