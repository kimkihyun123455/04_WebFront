function check1(){
  
  // 메뉴 가격
  const gimbab = 3000;
  const ramen = 3500;
  const donkkaseu = 5000;
  
  // 주문 개수 카운트
  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  let check; 

  // 자바스크립트에서의 비교연산자
  // == (값이 동일한 경우)
  // === (동일 비교 연산자) : 값, 자료형이 모두 같은 경우

  while(check!==null){
    check=prompt("메뉴 번호를 입력하세요");

    switch(check){
      case '1': gCount++; break;
      case '2': rCount++; break;
      case '3': dCount++; break;
      case null : alert('주문완료'); break;
      default : alert('메뉴에 작성된 번호만 입력하세요');
    }
  }
  
  alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
  let sum = gCount*3000 + rCount*3500 + dCount*5000;
  alert("총가격 : "+sum);

}

// Up & Down Game
function startGame(){
  // 맞춰야하는 난수 발생
  const answer = Math.floor(Math.random()*200+1);

  // 정답 횟수 카운트를 위한 변수 선언
  let count = 0;
  // prompt에 출력할 문자열
  let str = "1부터 200사이의 숫자를 입력하세요"

  while(true){

    let input = prompt(str);

    if(input===null){
      alert('ㅋㅋ허접');
      break;
    }

    // 숫자 입력 후 확인 클릭 시
    const value = Number(input); // 입력 받은 값 숫자로 변환

    // 숫자가 아닌 문자열을 잘못 입력될 경우
    // value에 NaN(Not a Number) 저장
    // isNaN() 함수를 통해 NaN인지 아닌지 boolean 타입으로 반환

    if(isNaN(value)){
      alert("숫자를 입력하세요");
      continue;
    } 
    if(value >200 || value <1){
      alert("범위 안의 숫자를 입력하세요");
      continue;
    }

    // 정답을 맞추기 위한 시도를 했기 때문에 count 증가
    count++;

    // 정답인 경우
    if(value===answer){
      alert(`정답!!! (${answer}) /  시도 횟수 : ${count})`);
      break;
    }else{// 틀린 경우

      if(value < answer){
        str = `${value}[UP] / 시도 횟수 : ${count}`;
      }else{
        str = `${value}[DOWN] / 시도 횟수 : ${count}`;
      }




    }



  }
  


}