//1)
function fn1(name){
  console.log(`1번 : Hello, ${name}!`);
}

fn1("David");

//2)
function fn2(a,b){
  console.log(`2번 : ${a}+${b} = ${a+b}`);
}

fn2(5,7);

//3)
const fn3 = (a,b) =>{
  console.log(`3번 : ${a}*${b} = ${a*b}`)
};

fn3(4,5);

//4)
const fn4 = (a,b) =>{
  if(a>b) console.log("4번 : 첫 번째 숫자가 더 큽니다")
    else console.log("4번 : 두번째 숫자가 더 크거나 같습니다.");
}

fn4(11,6);

//5)
const fn5 = (str) =>{
  console.log("5번 : "+str.length);
};

fn5("iloveyou");

//6)
const fn6 = (str,num) =>{
  for(let i=0; i<num;i++){
    console.log(`6번 : ${str}`);
  }
};

fn6("why",5);

//7)
const fn7 = (num) => {
  if(num%2==0) console.log("7번 : "+"true");
  else console.log("7번 : "+"false");
};

fn7(10);

//8)
const fn8 = (a,b,c) => {

  a>b ? (a>c?console.log("8번 : "+a):console.log("8번 : "+c)) : (b>c?console.log("8번 : "+b):console.log("8번 : "+c));

  // Math.max() : 전달 받은 값 중 가장 큰 수를 반환한다.


};

fn8(7,3,9);

//9)
const fn9 = (arr) => {
  console.log("9번 : "+arr[0]);
};

fn9([10,2,3,4]);

/* 
const fn9 =(arr) =>{return arr[0]}
console.log(fn9([1,2,3,4]));
*/



//10)

/*
배열.reduce(callback함수) : JS 배열의 메서드로 배열의 모든 요소를 순회하면서 하나의겨로가값을 누적하여 반환
acc (accumulator) : 이전 콜백 호출에서 반환된 값으로 결과를 누적해준다
curr (currentValue) : 현재값 / 현재 처리중인 배열 요소의 값
*/

const fn10 = (arr) => {
  let sum=0;
  for(let i =0; i<arr.length; i++){
    sum+=arr[i];
  }
  const average = sum/arr.length;
  
  console.log("10번 : "+sum, average);

};

fn10([1,2,3]);

//11)
const cal =(a,b)=>{
  return a*a+b*a+b;
};

const fn11 = (a,b,c) => {
  console.log(`11번 : ${c(a,b)}`);
};

fn11(2,4,cal);

//12)

const hello = (name) => {

  return "Hello my friend "+name+"! Have a good day!";

};

const fn12 = (a,b) => {
  console.log(`12번 : ${b(a)}`);
};

fn12("david",hello);