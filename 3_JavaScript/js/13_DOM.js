// Node 확인하기

document.querySelector("#btn1").addEventListener("click",() =>{

  const test = document.querySelector("#test");

  // #test의 모든 자식 노드 얻어오기
  // 요소.childNodes -> 배열 형태로 얻어옴
  const list = test.childNodes;
  console.log(list);

  console.log(list[3]);

  // 1. 부모 노드 찾기 (요소.parentNode)
  // li1 부모 노드를 찾아서 배경색 변경하기
  list[3].parentNode.style.backgroundColor = "skyblue";

  // 2. 첫번째 자식 노드 찾기 (요소.firstChild)
  // #test(ul) 의 첫번째 자식 노드 찾기
  console.log(test.firstChild);

  // 3. 마지막 자식 노드 찾기 (요소.lastChild)
  // #test 의 마지막 자식 노드 찾기
  console.log(test.lastChild);

  // 4. 원하는 위치(index)에 존재하는 자식 노드 찾기
  // (요소.childNodes[index])
  // #test(ul)의 자식 노드 중
  // 3번째 li 태그를 찾아서 배경색 pink 지정하기
  test.childNodes[9].style.backgroundColor = "pink";
 
  // 5. 이전/다음 형제 노드 찾기
  // 이전 형제 노드 : 요소.previousSibling
  // 다음 형제 노드 : 요소.nextSibling

  // 탐색용 코드는 연달아서 작성 가능

  // test.childNodes[9]의 다음 다음 형제 노드 선택
  // == test.childNodes[11]
  console.log(test.childNodes[9].nextSibling.nextSibling);

  // #test의 마지막 자식 노드의 이전 형제 노드 선택
  console.log(test.lastChild.previousSibling);
  
  // 노드 추가

  // 1. 마지막 자식 노드로 추가 (요소.appendChild(노드))
  // list[11]의 마지막 자식으로 "zzz" TextNode 추가
  list[11].appendChild(document.createTextNode("ZZZ"));

  // 2. 마지막 자식으로 추가 (append("내용" 또는 노드 또는 요소 n개))
  list[11].append("\n1234", " abcd", "가나다라");

  // 3. 첫 번째 자식으로 추가 (요소.prepend("내용" 또는 노드 또는 요소 n개));
  list[11].prepend("오늘은","집에","가고싶다\n");

  // 4. 이전/다음 형제로 추가 (요소.before / 요소.after("내용" 또는 노드 또는 요소 n개))
  // #test 전/후에 내용추가
  test.before("이전입니다");
  test.after("이후입니다");
});

// -------------------------------------------------------------------

document.querySelector("#btn2").addEventListener("click",() => {

  // #test2 얻어오기 (ul)
  const test2 = document.querySelector("#test2")

  console.log(test2.children); // HTMLCollection

  // #test2의 첫번째 자식 요소
  console.log(test2.firstElementChild);

  // #test2의 마지막 자식 요소
  console.log(test2.lastElementChild);

  // #test2의 부모 요소
  console.log(test.parentElement);

  // #test2의 이전 형제 요소
  console.log(test2.previousElementSibling);

  // #test2의 다음 항제 요소
  console.log(test2.nextElementSibling);

});
