//7. 즉시 실행 함수
//IIFE(Immediately-Invoked Function Expression)

const a = 7
function double() {
  console.log(a * 2)
}
double(); //실행문 구분


//즉시실행함수 
//( 익명의 함수 정의 )()
(function () {
  console.log(a * 2)
})();


(function () {
  console.log(a * 2)
}());
