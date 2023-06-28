//8. 호이스팅(Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

double()

// //함수 표현시 오류 ==> Uncaught TypeError: double is not a function
// const double = function () {
//   console.log(a * 2)
// }

//함수 선언으로 변환 => 호이스팅 현상으로 오류없이 결과 출력 : double() 상단으로 올라가 실행
function double () {
  console.log(a * 2)
}



