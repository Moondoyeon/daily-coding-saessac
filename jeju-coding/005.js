//for문 계산
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
  a += i;
}

console.log(a+b); //16
// i = 1 -> a = 11
// i = 3 -> a = 14
// a + b = 14 + 2 = 16