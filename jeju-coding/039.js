// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

function 변환(str){
  return str.replaceAll('q', 'e');
}
console.log(변환('hqllo my namq is hyqwon')); // hello my name is hyewon
console.log(변환('quertyqqqqq'));  //euertyeeeee


//방식1
function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll('absqqqabs',"q","e"));
str.split('q') //  ['abs', '', '', 'abs']
str.split('q').join('e') // 'abseeeabs'

//방식2_정규식
str.replace(/q/gi, 'e')
