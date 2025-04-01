const bomberman= document.querySelector("#box>img")
const box = document.querySelector("#box")

document.addEventListener("keydown",function(e){
  
  if(e.key=="ArrowRight"){
    bomberman.style.marginLeft+="100px";
  }
  if(e.key=="ArrowLeft"){
    bomberman.style.transform="translateX(-1px)";
  }
  if(e.key=="ArrowUp"){
    bomberman.style.transform="translateY(-1px)";
  }
  if(e.key=="ArrowDown"){
    bomberman.style.transform="translateY(1px)";
  }


});
document.addEventListener("keyup",function(e){
  if(e.key=="ArrowRight"){
    bomberman.style.marginRight+="100px";
  
  }
  if(e.key=="ArrowLeft"){
    bomberman.style.transform="translateX(-1px)";
  }
  if(e.key=="ArrowUp"){
    bomberman.style.transform="translateY(-1px)";
  }
  if(e.key=="ArrowDown"){
    bomberman.style.transform="translateY(1px)";
  }


});

document.addEventListener("keydown",function(e){

  if(e.key.toLowerCase()=='z'){
    box.innerHTML = '<img src="/images/bomb.png>"';
  }

});