// console.log(값)
// 브라우저 콘솔에 괄호 내부의 값을 출력

console.log(1234);
console.log("문자열을 양족에 쌍따옴표 작성");
console.log('JS는 홑따옴표도 문자열로 취급!');

//-------------------------------------------------

// 변수의 선언
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// [작성법]
// 변수종류 변수명;
var number1;

// 초기화 (== 변수에 처음 값을 할당하는 과정)
// [작성법]
// 변수명 = 값;
number1 =10;

// 콘솔에 number1 값 출력하기
console.log(number1);

// 변수 선언과 + 초기화 동시 가능
var number2 =20;

console.log(number2);

// 변수의 연산 가능
console.log(number1+number2);

// 변수에 대입한 값 변경하기
number1 = 300;
number2 = 400;

// 변경된 두 변수의 값 출력
// 1) 문자열 + 문자열/숫자/변수 == 이어쓰기
console.log("number1의 값 : " + number1); // number1의 값 : 300
console.log("100" + 100); // 100100

// 2) 괄호 내부에 , 를 작성해 각각의 값을 독립적으로 출력하기
// 형변환 없이 출력되어 문자열 따로, 다른 타입 따로 독립되어 출력된다
console.log("number1 : ",number1," / number2 : ",number2);

//------------------------------------------------------

// var, let, const 의 차이점

// 1. var (변수, 변수 선언 시 중복되는 변수명으로 선언 가능)
// -> 먼저 선언된 변수가 나중에 선언된 변수에 덮어씌워진다

var menu = "삼겹살";
console.log(menu); // 삼겹살
var menu = "초밥";
console.log(menu); // 초밥

// 변수명이 중복되어 값이 덮어쓰기 되면
// 이전에 선언한 변수를 쓸 수 없게 되는 문제가 발생한다.

//------------------------------------------------------

// 2. let (변수, var의 변수명 중복 문제 해결)

let number3 = 25;

// let number3 = 500; 변수명 중복 불가

number3 = 500; // 기존 변수 number3에 새로운 값 재할당 가능

console.log(number3);

//------------------------------------------------------

// 3. const (상수, constant, 항상 같은 수)
// 한번 값이 대입되면 새로운 값 재대입이 불가능하다
// const는 선언과 동시에 초기화를 해야한다

const PI = 3.141592;

/*PI = 1.23;*/ 
// Uncaught TypeError : Assignment to constant vairable
// 상수로 배정되어 있어 재대입이 불가능하다

//-------------------------------------------------------

// 블록 레벨 scope / 함수 레벨 scope

// 블록 레벨 scope (let, const)
// let과 sonst로 선언된 변수는
// 변수가 선언된 블록 (중괄호{}) 내부에서만 유효하다는 걸 의미한다
// 즉, 코드 블록 내부에서 선언한 변수(let, const)는 해당 블록 외부에서는 접근할 수 없다.

let foo1 = 123; // 전역 변수
const foo2 = 456; // 전역 변수

{ // 블록 레벨
  let num1 = 789; // 지역 변수

  const num2 = 0; // 지역 변수

}

console.log(foo1); // 전역변수이기 때문에 접근 가능
console.log(foo2); // 전역변수이기 때문에 접근 가능
//console.log(num1);  Uncaught ReferenceError: num1 is not defined
//console.log(num2);  Uncaught ReferenceError: num1 is not defined
// ->  둘 다 블록레벨 스코프이기 때문에 블록 밖에서 접근할 수 없다

//--------------------------------------------------------

// 함수 레벨 스코프 (var)
// var 키워드로 선언된 변수는 함수 내 어디서든 접근할 수 있다
// if, for 등의 일반 블록은 무시하고, var로 선언된 변수가 있는
// 함수 전체에서 유효하다

var test1 = 123; // 전역 변수

{
  var test2 = 456;
}

console.log(test1);
console.log(test2); // let과 const가 블록외부에서 접근할 수 없던 것과 달리 var는 일반블록은 
                    // 무시하고 외부에서도 접근이 가능하다


// 함수안에서는?
function example(){ // 이렇게 함수 형태로 만들어진 코드 블록은 함수레벨 scope 라고 함.
  var test3 = '함수레벨 var 테스트';

  console.log(test3);
}

// console.log(test3);
// var는 일반블록 레벨만 무시할 수 있고 함수블록 레벨은 무시하지 못한다
// 즉, 함수블록 안에서 선언된 var 변수는 함수 안에서만 사용 가능하다

example();

function example2(){

  if(true){ // if, for, while 같은 일반 블록문 내에서 선언된 var 일반 변수는 블록을 무시한다
    var x =10;
  }

  console.log(x);
}

example2();

//----------------------------------------------------------------------------------

// 1. var의 호이스팅
// : var로 선언된 변수는 선언만 해당 스코프의 최상단으로 호이스팅된다. 초기화는 원래 위치에서 수행된다

// 에러가 안나고 undefined가 찍혔다
// var의 호이스팅에 의해 아래에서 선언된 var a가 
// 위로 끌어올려저 초기화는 안되었지만 선언은 완료되어 에러가 나오지 않았다
console.log(a); // undefined

// 변수의 선언과 초기화
var a = 10; // 변수의 선언만이 호이스팅됨
// 초기화 코드는 원래 위치에서 이루어진다

console.log(a); // 10 정상작동

// 2. let / const의 호이스팅
// : let/const로 선언된 변수는 선언만 해당 스코프의 최상단으로 호이스팅됨
// var와 달리, let/const로 선언된 변수는 초기화가 이루어지기 전에는 사용될 수 없다

// TDZ(Temporal Dead Zone)
// 코드 실행 과정에서 특정 시점까지 변수가 접근 불가능한 상태를 의미한다
// Javascript에서 let/const 키워드로 선언된 변수가
// 초기화 전짜기 접근할 수 없는 구간을 말한다

// let x로 인해 x의 선언이 호이스팅되었으나 TDZ에 놓여 초기화 전까진 해당 변수는 접근이 불가능하다
// console.log(x); 접근 불가

let x = 50;

console.log(x); // 50 출력

// console.ong(n); 접근 불가
const n = 100;

console.log(n);

// let/const는 var보다 예측 가능한 코드를 작성할 수 있다

//------------------------------------------------------------------------------------

// JS 자료형 확인하기

// typeof 연산자 : 변수/값의 자료형을 출력하는 연산자

// undefined : 정의 되지 않은 변수 / 값이 아직 대입되지 않았다
let undef; // 변수 선언
console.log("undef : ",undef,typeof undef);

// string(문자열) : "" 또는 ''로 작성된 값
const userName = "홍길동";
console.log("name : ", userName, typeof userName); // 홍길동 string

const phone = '01012341234';
console.log("phone : ",phone, typeof phone); // 01012341234 string

const gender = 'M';
console.log("gender : ",gender, typeof gender); // M string


// number (정수, 실수, 양수, 음수, 0 등 모든 숫자)
const age = 25;
const height = 160.5;
const eyesight = -5;

console.log("age : ",age,typeof age); // 25 number
console.log("height : ",height,typeof height); // 160.5 number
console.log("eyesight : ",eyesight,typeof eyesight); // -5 number

// boolean (true/false)
const isTrue = true;
const isFalse = false;

console.log("ifTrue : ",isTrue, typeof isTrue); // true boolean
console.log("isFalse : ",isFalse, typeof isFalse); // false boolean

//object (객체)
// 값을 여러개 저장할 수 있는 형태

// 1) 배열(Array) : 여러 값이 나열되어 있는 것의 묶음
const numbers = [10,20,30];
console.log("numbers : ",numbers, typeof numbers); // (3) [10,20,30] object

console.log("numbers 배열 값 중 0번째 : ", numbers[0], typeof numbers[0]); // 10 number
console.log("numbers 배열 값 중 1번째 : ", numbers[1], typeof numbers[1]); // 20 number
console.log("numbers 배열 값 중 2번째 : ", numbers[2], typeof numbers[2]); // 30 number
console.log("numbers 배열 값 중 3번째 : ", numbers[3], typeof numbers[3]); // undefined undefined

// javascript에서의 배열은 값의 추가 및 삭제가 자유롭다
// 크기가 고정되지 않고 필요에 따라 자동으로 늘어나거나 줄어든다

// 2) JS 객체
// 값을 K:V (Map) 형식으로 여러개 저장하는 형태
// -> {K:V, K:V, K:V ...}

// K(key) : 값을 구분하는 이름 
// V(value) : K에 대응되는 값

const user = {id:"user01", pw:"pass01", name:"홍길동"};

console.log("user : ",user,typeof user); // {id:'user01', pw:'pass01', name:'홍길동'} object

// 객체에 존재하는 값 하나씩 얻어오기

// 방법 1 : 변수명['key']
console.log("user['id'] : ", user['id'], typeof user['id']); // user['id'] : user01 string

// 방법 2: 변수명.key
console.log("user.id : ", user.id, typeof user.id); // user.id : user01 string

// 함수 (function)

// 작성법
// let/const 변수명 = function(){};
// (변수명 == 함수명)

const sumFn = function(a,b){return a+b};

console.log(typeof sumFn); // function

console.log(sumFn(3,5)); // 8

// null
console.log(typeof null); // object