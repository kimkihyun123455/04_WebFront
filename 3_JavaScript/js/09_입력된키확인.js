// 문자열.toLowerCase() : 영어를 모두 소문자로 변경
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경

const key = document.querySelectorAll(".key");


document.addEventListener("keydown", function(e){
  console.log(e.key);
  if(e.key.toLowerCase()=='q'){
    key[0].style.backgroundColor="yellow";
  }

  if(e.key.toLowerCase()=='w'){
    key[1].style.backgroundColor="pink";
  }

  if(e.key.toLowerCase()=='e'){
    key[2].style.backgroundColor="skyblue";
  }

  if(e.key.toLowerCase()=='r'){qwe
    key[3].style.backgroundColor="red";
  }

  

});

document.addEventListener("keyup", function(e){

  if(e.key.toLowerCase()=='q'){
    key[0].style.backgroundColor="";
  }

  if(e.key.toLowerCase()=='w'){
    key[1].style.backgroundColor="";
  }

  if(e.key.toLowerCase()=='e'){
    key[2].style.backgroundColor="";
  }

  if(e.key.toLowerCase()=='r'){
    key[3].style.backgroundColor="";
  }
});

/*

// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 비코드 이벤트 핸들러 ㅎ마수
function changeKeyColor(e,color){

  const keyMap = {'q':0 'w':1, 'e':2, 'r':3; }

  const idx = keymap[e.key.toLowerCase()];;
  // keyMap['q'] = 0
  // keyMap['q'] = 1
  // keyMap['q'] = 2
  // keyMap['q'] = 3

  if(idx != undefined){
    key[dix].styel.backgroundColor = color;
  }

}









*/ 