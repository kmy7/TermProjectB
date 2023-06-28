//10. 콜백 함수(Callback)
//함수의 인수로 사용되는 함수
// => 특정한 실행 위치를 보장

//setTimeout(함수, 시간) ==> 함수 : 콜백함수
// function timeout() {
//   setTimeout( ()=> {
//     console.log('Happy')
//   }, 3000)
// }
// timeout()
// console.log('Done!')  //'Done'출력 후 3초후 'Happy' 출력

//콜백 함수
function timeout(cb) {
  setTimeout( ()=> {
    console.log('Happy')
    cb()
  }, 3000)
}
timeout(()=>{
  console.log('Done!')  //3초후 'Happy'출력 후 'Done' 출력

})
