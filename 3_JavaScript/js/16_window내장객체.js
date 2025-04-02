// window.setTimeout()
document.getElementById("btn1").addEventListener("click",() => {

  setTimeout(function(){

    alert("3초후 출력");

  }, 3000)

});

// window.setInterval

let interval; // setInterval을 저장하기 위한 전역함수

// 현재 시간 문자열로 반환 함수
function currentTime() {

  const now = new Date();

  let hour = now.getHours(); // 시
  let min = now.getMinutes(); // 분
  let sec = now.getSeconds(); // 초
  // 디지털 시계 모양에 따라  1의 자리여도 01, 02 로 표현
  
  if(hour<10) hour = "0"+hour;
  if(min<10) min = "0"+min;
  if(sec<10) sec = "0"+sec;

  return `${hour} : ${min} : ${sec}`

}

function clockFn() {
  const clock = document.getElementById("clock");

  clock.innerText=currentTime();

  interval = setInterval(function() {
    clock.innerText=currentTime();
  }, 1000);
}

clockFn();

document.getElementById("stop").addEventListener("click",() => {
  clearInterval(interval);
});

document.getElementById("start").addEventListener("click",() => {
  clockFn();
});