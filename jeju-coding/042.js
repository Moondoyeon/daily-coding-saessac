// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.

function 요일구하기(a,b) {

  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let x = new Date(`2020-${a}-${b}`);
  return day[x.getDay()];
}

//  1월 1일 수
//  const x = new Date('2020-'+1+'-'+1); 
//  -->  Wed Jan 01 2020 00:00:00 GMT+0900 (한국 표준시)
//  x.getDay() --> 3 (일요일(0)부터 시작하는 숫자 리턴)
// day[3] --> 'WED'

console.log(요일구하기(5,16)); //