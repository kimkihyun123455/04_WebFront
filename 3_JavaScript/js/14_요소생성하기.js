const createtBox = document.querySelector("#createBox");
const container = document.querySelector(".container");

createtBox.addEventListener("click",() =>{

  // 1. div 요소 생성
  const box = document.createElement("div"); // <div></div> 만들어줌

  // 2. 만들어진 div 요소 "box" 클래스 추가
  box.classList.add("box"); //<div class="box"></div>

  // 3. container의 마지막 자식으로 div요소 추가
  container.append(box);

  // 4. input 요소 생성
  const input = document.createElement("input");
  input.type = "text";

  // 5. 생성된 input을 box의 마지막 자식으로 추가
  box.append(input);
});

/*
요소.classList : 요소의 클래스 목록
-> 클래스 존재여부, 추가, 제거 등 할 수 있다.

* 요소.classList
-> 요소 클래스 목록이 배열 형식으로 반환

* 요소.classList.contains("클래스명");
-> 클래스가 있으면 true, 없으면 false

* 요소.classList.add("클래스명");
-> 클래스 추가

* 요소.classList.remove("클래스명");
-> 클래스 삭제

*/

// innerHTML로 요소 추가하기
const innerHTMLBox = document.querySelector("#innerHTMLBox");

innerHTMLBox.addEventListener("click", () => {
  container.innerHTML += "<div class='box'><input type='text'></div>"
});

// createElement는 기존의 요소에 새 요소를 추가하는 방식이지만
// innerHTML은 리렌더링이 일어나 기존의 요소를 다 지우고 새 요소를 포함한 기존요소들을 재생성한다
// 이때, 기존 요소에 있던 참조점 등이 지워질 수 있다
// 그냥 createElement 쓰라고