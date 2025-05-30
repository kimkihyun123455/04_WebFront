function check1(btn){
  console.log(btn);
  // 매개변수 btn == 클릭한 버튼(this)

  // 현재 버튼의 배경색을 얻어와 저장
  const bgColor = btn.style.backgroundColor;
  
  // 버튼이 클릭 될 때마다 pink <-> yellow 변경
  if(bgColor == "yellow"){
    btn.style.backgroundColor = "pink";
  }else{
    btn.style.backgroundColor = "yellow";
  }
}

// 고전 이벤트 모델 확인

// 아이디가 test1-1 인 요소를 얻어와 test1a 변수에 저장

const test1a = document.querySelector("#test1-1");

// ** 고전 이벤트 모델 작성법 **
// 요소.이벤트리스너 = 이벤트핸들러

test1a.onclick = function() {
  alert("고전 이벤트 모델 확인 버튼 클릭됨");
}

// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭시 #test1-1의 onclick 이벤트리스너의 이벤트 핸들러 제거하기

document.querySelector("#test1-2").onclick = function(){

  // 기존 onclick의 이벤트 핸들러를 null로 덮어씌움
  test1a.onclick = null;
  alert("이벤트 제거됨");

}

// 고전 이벤트 모델 단점

// test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

// test1-3 요소가 클릭되었을 때 배경색 빨간색으로 변경

test1c.onclick = function(){
  test1c.style.backgroundColor = "red";
};

// 시간이 지나고

test1c.onclick=function(){
  test1c.style.backgroundColor="white";
};

// 덮어씌우기 진행됨

// ---------------------------------------------

// 표준 이벤트 모델 확인
const test2 = document.querySelector("#test2");

// ** 표준 이벤트 모델 작성법 **
// 요소.addEventListener("이벤트종류", 이벤트핸들러(함수));

test2.addEventListener("click", function(){

  // 투명도 1(불투명) -> 투명도 0(투명)

  // 현재 #test2 의 투명도 확인
  let curr = test2.style.opacity;

  console.log(curr);

  // 맨처음에는 투명도 "" -> 1 대입

  if(curr == ''){
    test2.style.opacity =1;
    curr =1;
  }

  // 투명도 0.1 씩 감소
  test2.style.opacity = curr - 0.1;

  if(test2.style.opacity == 0){
    test2.style.opacity=1;
  }

});

// #test2 요소를 클릭하면 클릭 횟수 카운트
let count =0;

test2.addEventListener("click", function(){

  count++; // 카운트 1 증가

  // 표준 이벤트 모델의 이벤트 핸들러 내부에서 this
  // == 이벤트가 발생한 요소
  this.innerText = count;

});

const box3 = document.querySelector("#box3");

box3.addEventListener("click",function(){
  alert(`입력된 색상 : ${box3.style.backgroundColor}`);
});

const input3 = document.querySelector("#input3");
input3.addEventListener("keyup", function(e){
  if(e.key=="Enter")
    box3.style.backgroundColor = `${input3.value}`;
});