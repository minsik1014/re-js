//예상결과: 안녕
console.log("안녕");

//예상결과: 10
console.log(10);

//예상결과: 15
console.log(10 + 5);

//예상결과: 105 - 문자열이기 때문
console.log("10" + "5");

//const 변수에 초기값 할당(초기화)
const number = 10;
const text = "10";

//15 - 숫자끼리 더함
console.log(number + 5);
//105 - 문자 10 + 숫자 5 =  문자열 105
console.log(text + 5);
//number - 숫자형
console.log(typeof (number +5));
//string - 문자형
console.log(typeof(text + 5));

// 실행불가 - const로 만든 변수는 재할당 불가
// number = 15;
// console.log(number);

//let 변수는 재할당 가능
let score = 15;
console.log(score);

score = 10;
console.log(score);

// 7 
console.log(10 - 3);
//30
console.log(10 * 3);
//3.33333~
console.log(10 / 3);
//1
console.log(10 % 3);

//조건문 짝수, 홀수 판단, === 값이 같은지 비교
const value = 10;
if (value % 2 === 0 ) {
    console.log("짝수");
} else {
    console.log("홀수");
}
//반복문
for(let i = 1; i <= 5; i += 2){
    console.log(i);
}

//결과예상 1 3 5 - 정답

//배열 
const fruits = ["사과", "바나나", "포도"];
//사과
console.log(fruits[0]);
//바나나
console.log(fruits[1]);
//3
console.log(fruits.length);
//3번 인덱스 배열은 정의 되지 않음
for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
}

//함수 함수명(매개변수){실행할 코드} 
function hello(name){
    console.log("안녕"+ name);
}
hello("민식");
//리턴으로 add 값 추출 후 return1에 저장
function add(a, b){
    return a+b;
}
const return1 = add(3, 5);
console.log(return1);