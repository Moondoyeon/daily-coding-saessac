//놀이기구 키 제한

// 입력으로 키가 주어지면
// 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

function heightLimit(height) {
  if(height >= 150) {
    return console.log('YES');
  } else {
    return console.log('NO');
  }
}

heightLimit(155); // YES
heightLimit(100); // NO