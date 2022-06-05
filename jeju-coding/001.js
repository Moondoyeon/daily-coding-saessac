// 배열의 삭제
var nums = [100, 200, 300, 400, 500];

// 방법1 mutable
nums.pop();
nums.pop();
console.log(nums);

// 방법2 immutable
arr = nums.slice(0,3);
console.log(arr);