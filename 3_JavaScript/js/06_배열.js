// 배열 선언 및 기초 사용법
function check1(){

  // 배열 선언 방법
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ["사과", "바나나", "딸기"];

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);
  console.log(123);

  // 배열명.length : 배열의 길이

  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);

  // 배열의 index
  // 배열명[index] -> 배열의 해당 인덱스에 존재하는 데이터 반환
  console.log('arr4[0] : ', arr4[0]); 
  console.log('arr4[0] : ', arr4[1]); 
  console.log('arr4[0] : ', arr4[2]); 

  // 배열명[index] = 값;
  // -> 해당 인덱스에 지정된 값 대입
  arr2[0] = 100;
  arr2[1] = "점심 뭐 먹지?";
  arr2[2] = true;

  console.log("arr2 : " , arr2);
  // JS 배열의 특징 : 인덱스 별로 자료형을 다르게 지정할 수 있다.

  // 길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능
  arr1[0] = "가";
  arr1[1] = "나";
  arr1[2] = "다";

  console.log("arr1 : ", arr1);

  arr1[4] = "마";

  // 원하는 index에 값을 마음대로 추가할 수 있다.
  // -> 중간에 건너뛴 index는 빈칸(empty)으로 채워짐
  console.log("arr1 : ",arr1);
}

// 배열과 for문
function check2(){

  // for 문을 이용해서 배열 요소 초기화 하기
  const arr = [];

  for(let i = 0; i <= 3; i++){
    arr[i] = i*10;
  }

  console.log(arr);



}

function check3(){

  // 결과 출력 span
  const menuResult = document.getElementById("menuResult");

  const arr = ["김밥", "돈까스", "라면", "국밥"]

  menuResult.innerText = arr[Math.floor(Math.random()*arr.length)];

  
}