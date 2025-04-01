const box =document.querySelectorAll(".box");
const input = document.querySelectorAll(".color-input");
const btn = document.querySelector("#changeButton");

btn.addEventListener("click",function(){
  box[0].style.backgroundColor=`${input[0].value}`;
  box[1].style.backgroundColor=`${input[1].value}`;
  box[2].style.backgroundColor=`${input[2].value}`;
  box[3].style.backgroundColor=`${input[3].value}`;
  box[4].style.backgroundColor=`${input[4].value}`;

});
