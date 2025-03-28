// 변수 선언

// document : HTML 문서 내에서
// getElementId : HTML 요소 Id를 가져오겠다
  
const number1 = document.getElementById('input1');
const number2 = document.getElementById('input2');
const result = document.getElementById('calcResult');

const number3 = document.getElementById('num1');
const number4 = document.getElementById('num2');
const number5 = document.getElementById('num3');
const result2 = document.getElementById('total');


function plusFn(){
  const value1 = number1.value;
  const value2 = number2.value;

  console.log(value1,value2);

  // input 요소에 작성된 값은 무조건 string형

  // [해결방법]
  // 문자열을 숫자로 변경하는 코드를 수행
  // 숫자만 작성된 문자열을 진짜 숫자타빙브올 바꾸는 법
  // Number("123"); -> 123
  console.log(Number(value1)+ Number(value2));

  // 두 수의 합을
  // 아이디가 "calcResult"인 요소 (result 변수)의
  // 내부 글자 (innerText, HTML 요소의 content)로 대입하기
  result.innerText = Number(value1)+ Number(value2);
}

function minusFn(){
  const value1 = Number(number1.value);
  const value2 = Number(number2.value);

  result.innerText = value1 - value2;
}

function multiFn(){
  const value1 = Number(number1.value);
  const value2 = Number(number2.value);

  result.innerText = value1 * value2;
}

function divFn(){
  const value1 = Number(number1.value);
  const value2 = Number(number2.value);

  result.innerText = value1 / value2;
}

function modFn(){
  const value1 = Number(number1.value);
  const value2 = Number(number2.value);

  result.innerText = value1 % value2;
}

function totalFn(){
  const value1 = Number(number3.value)
  const value2 = Number(number4.value)
  const value3 = Number(number5.value)
  result2.innerText = value1+value2+value3;
}