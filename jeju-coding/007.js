// 2,3,5

let let = 1; 
// => 오류 let is disallowed as a lexically bound name 
var let = 1;
// => 오류가 뜨지 않음.

let &age = 1;
// =>오류 Invalid left-hand side in assignment
// 부적절한 위치에서 할당 행위를 하려고 할 때 발생하는 에러

let 1age = 1;
// => 오류 Invalid or unexpected token
