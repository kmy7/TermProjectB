//5. 함수 복습

// function sum(x, y) { //매개변수  
//   //console.log(x + y)
//   return x + y
// }

// const a = sum(1, 3) //인수
// const b = sum(4, 12)

// console.log(a)
// console.log(b)
// console.log(a+b)
// console.log(sum(1, 3))
// console.log(sum(4, 12))
// console.log(sum(1, 3) + sum(4, 12))

//함수선언
// => 기명함수 - 함수선언, 익명함수 -함수표현

// const sum = function (x, y) { //익명함수
//   return x + y
// }

// console.log(sum(1, 3))

//6. 화살표 함수
// () => { } vs function () { }

const double = function (x) { //익명의 함수
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = (x) => {  //화살표 함수
  return x * 2
}
console.log('doubleArrow: ', doubleArrow(7))

const doubleArrowShort = (x) => x * 2  //축약형 화살표 함수 == x => x * 2
console.log('doubleArrowShort: ', doubleArrowShort(7))

const doubleArrowShort2 = (x, y) => x * y  //축약형 화살표 함수
console.log('doubleArrowShort2: ', doubleArrowShort2(7, 7))

const doubleArrowShort3= x => null  //축약형 화살표 함수
console.log('doubleArrowShort3: ', doubleArrowShort3(7))

const doubleArrowShort4= x => undefined  //축약형 화살표 함수
console.log('doubleArrowShort4: ', doubleArrowShort4(7))

//배열
const doubleArrowShort5= x => [1, 2, 3]  //축약형 화살표 함수
console.log('doubleArrowShort5: ', doubleArrowShort5(7))

//객체데이타 인 경우 
const doubleArrowShort6= x => ({ name : 'test'})  //축약형 화살표 함수
console.log('doubleArrowShort6: ', doubleArrowShort6(7))