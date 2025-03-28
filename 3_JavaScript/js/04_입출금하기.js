// prompt 사용 연습

function test(){
  const password = prompt('비밀번호를 입력하세요');


  if(password == null){
    alert('취소되었습니다')
  }else{
    if(password=='1234'){
      alert('비밀번호가 일치합니다');
    }else{
      alert('비밀번호가 일치하지 않습니다');
    }
  }
}

let balance = 10000;
const output = document.getElementById('output');
const amount = document.getElementById('amount');

output.innerText = balance;

function deposit(){
  
  if(amount.value.length == 0){
    alert("금액을 입력해주세요")
  }else{
    balance += Number(amount.value);

    output.innerText = balance;
    amount.value ='';
  }
}

function withdrawal(){

  if(amount.value.length==0){
    alert('출금할 잔액을 입력하세요');
    
  }else{

  const password = prompt('비밀번호를 입력하세요');

  console.log(password);

  if(password == '1234'){
    if(Number(amount.value)>balance){
      alert('출금 금액이 잔액보다 클 수 없습니다');
      amount.value = '';
    }else{
      balance -= Number(amount.value);
      //alert(amount+'원이 출급되었습니다. 남은 잔액 : '+ balance+'원');
      alert(`${amount.value}원이 출급되었습니다. 남은 잔액 ${balance}`);
      // 템플릿 리터럴
      // 백틱(``)을 사용하여 문자열을 감싸고,
      // ${} 안에 변수를 넣어 동적으로 문자열을 생성하는 방식

      amount.value ='';

      output.innerText = balance;
    }


  }else if(password == null){
    alert('취소');
  }
  else{
    alert("비밀번호가 일치하지 않습니다");
  }

}
}


