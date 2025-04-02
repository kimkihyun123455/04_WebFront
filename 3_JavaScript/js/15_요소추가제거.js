// 요소.remove() : 요소 제거

const addInput = document.querySelector("#add");
const calInput = document.querySelector("#calc");

const container = document.querySelector(".container");
// 동적으로 만들어진 요소를 붙어야하는 요소

addInput.addEventListener("click",() =>{
  // div 요소 생성
  const newDiv = document.createElement("div")
  
  // class 추가
  newDiv.classList.add("row");

  // input 요소 생성
  const newInput =document.createElement("input");
  
  //newInput.type ="number"; 다른 방식으로는
  newInput.setAttribute("type", "number");

  // class 추가
  newInput.classList.add("input-number");

  // div(row)에 input 넣기
  newDiv.append(newInput);

  // container에 div 넣기
  container.append(newDiv);

  // span 요소 생성
  const span = document.createElement("span");

  // span에 클래스 추가
  span.classList.add("remove-row");

  // 내용으로 &times; 추가 (innerHTML)
  span.innerHTML = "&times;"; // innerHTML을 이용한 갱신(+=)을 하지 않았기 때문에 리렌더링은 일어나지 않는다

  // container에 span 넣기
  newDiv.append(span);
  
  span.addEventListener("click",()=>{
    span.parentElement.remove();
  });

  /*
  span.addEventListener("click",(e)=>{
    const parent = e.target.parentelement;
    parent.remove;
    }) 
  */

});

calInput.addEventListener("click", () => {

  const numbers = document.querySelectorAll(".input-number");
  let sum = 0;

  for(let i = 0; i < numbers.length; i++){
    sum += Number(numbers[i].value);
  }

  alert(`총 합계 : ${sum}`);

});

