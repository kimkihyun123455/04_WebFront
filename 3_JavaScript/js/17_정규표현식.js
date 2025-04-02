// 정규 표현식 객체 생성 및 확인하기
document.querySelector("#btn1").addEventListener("click",() => {
 
  // 정규 표현식 객체 생성
  const regExp1 = new RegExp("script");
  // "script"와 일치하는 문자열이 있는지 검사하는 정규 표현식

  const regExp2 = /java/;
  // java와 일치하는 문자열이 있는지 검사하는 정규표현식

  // 확인하기
  const str1 = "저희는 지금 javascript를 공부하고 있습니다";
  const str2 = "jsp(java server page)도 곧 공부할 겁니다";
  const str3 = "java, java, java"; 
 
  console.log(regExp1.test(str1));
  console.log(regExp1.exec(str1));

  console.log(regExp2.test(str2));
  console.log(regExp2.exec(str2));

  console.log(regExp1.test(str3));
  console.log(regExp1.exec(str3));

});

// 메타 문자 확인하기
document.querySelector("#btn2").addEventListener("click",() => {

  const div1 = document.querySelector("#div1");

  // [abcd]
  const regExp1 = /[abcd]/;
  div1.innerHTML += "/[abcd]/, apple : " + regExp1.test("apple") + "<br>";
  div1.innerHTML += "/[abcd]/, ssbss : " + regExp1.test("ssbss") + "<br>";
  div1.innerHTML += "/[abcd]/, qwert : " + regExp1.test("qwert") + "<br>" + "<hr>";

  // ^ (캐럿)
  const regExp2 = /^group/; // 문자열의 시작이 group인지 확인
  div1.innerHTML += "/^group/, group100 : " + regExp2.test("group100") + "<hr>";
  div1.innerHTML += "/^group/, group100 : " + regExp2.test("100group") + "<hr>";

  // $ (달러)

  const regExp3 = /group$/; // 문자열의 끝이 group인지 확인
  div1.innerHTML += "/group$/, grouop100 : " + regExp3.test("group100") + "<hr>";
  div1.innerHTML += "/group$/, grouop100 : " + regExp3.test("100group") + "<hr>";

});


// 이름 유효성 검사하기

document.getElementById("inputName").addEventListener("keyup",(e) => {

  //결과 출력용 span 얻어오기
  const span = document.getElementById("inputNameResult");

  // 한글 2~5글자인 정규표현식 객체 생성
  const regExp = /^[가-힣]{2,5}$/;

  // 빈칸인지 검사

  if(e.target.value.length==0){
    span.innerText ="";
    return;
  }

  if(regExp.test(e.target.value)){ // 유효한 경우
    span.innerText ="유효한 이름 형식입니다."
    span.style.color ="green";
    span.style.fontWeight ="bold";


  }else{ // 유효하지 않은 경우
    span.innerText="유효하지 않은 이름 형식입니다."
    span.style.color="red";
    span.style.fontWeight="bold";
  }

});

// 주민번호 유효성 검사
document.getElementById("inputPno").addEventListener("keyup",(e) =>{

  const span = document.getElementById("inputPnoResult");
  
  if(e.target.value.length==0){
    span.innerText="주민등록번호를 작성해주세요";
    span.classList.remove("confirm","error");
    return;
  }

  const regExp = /^\d{6}-\d{7}$/;

  if(regExp.test(e.target.value)){
   // span.innerText="유효한 주민등록번호 형식입니다."
   // span.classList.add("confirm");
    span.classList.remove("error");
    span.classList.toggle("confirm", true);
    span.classList.toggle("error", false);

  }else{
    span.innerText="유효하지 않은 주민등록번호 형식입니다."
   // span.classList.remove("confirm");
   // span.classList.add("error");    
    span.classList.toggle("confirm", false);
    span.classList.toggle("error", true);
  }


});