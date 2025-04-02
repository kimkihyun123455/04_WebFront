const resName = document.querySelector("#resName");
const input = document.querySelector("#resNameInput");
resName.addEventListener("click",() =>{

  resName.style.display="none";

  input.style.display="flex";

});

input.addEventListener("blur",() => {

  input.style.border=0;

});

const updateBtn = document.querySelector("#updateBtn");
const btnDiv = document.querySelector(".b-hidden");
const addMenu = document.querySelector("#addMenu");
const deleteMenu = document.querySelector("#deleteMenu");
const exitBtn = document.querySelector("#exitBtn");
const menuName = document.querySelectorAll(".menu-name");
const menuPrice = document.querySelectorAll(".menu-price");
const menu = document.querySelectorAll(".menu");
const menuCon = document.querySelector(".menu-container");

updateBtn.addEventListener("click",()=>{

  updateBtn.style.display="none";
  btnDiv.style.display="flex";
  btnDiv.style.justifyContent="flex-end";

  
  
  for(let i=0; i<menuCon.childElementCount; i++){
    const newMenu = document.createElement("input");
    const newMenuPrice = document.createElement("input");
    const checkBox = document.createElement("input");
    
    
    menuName[i].style.display="none";
    menuPrice[i].style.display="none";
  
    menuName[i].after(newMenu);
    newMenu.classList.add("menu-name-input");
    newMenu.value = newMenu.previousElementSibling.innerText;
    
    menuPrice[i].after(newMenuPrice);
    newMenuPrice.classList.add("menu-price-input");
    newMenuPrice.value = newMenuPrice.previousElementSibling.innerText;
  
    menuName[i].after(checkBox);
    checkBox.type="checkbox";
    checkBox.classList="checked";
  }

deleteMenu.addEventListener("click",() => {

  const check = document.querySelectorAll(".checked");

  for(let i=0; i<check.length; i++){

    if(check[i].checked){
      check[i].parentElement.remove();
    };
  };

});

addMenu.addEventListener("click",() => {

  const newList = document.createElement("list");
  const newSpan = document.createElement("span");

  menuCon.append(newList);
  newList.classList.add("menu");
  newList.append(newSpan);
  newList.append(newSpan);
  newList.firstChild.classList.add("menu-name");
  newList.lastChild.classList.add("menu-price");


});




























});