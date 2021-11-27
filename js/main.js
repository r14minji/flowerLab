const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo"); 


// 반응형 메뉴버튼
btnCall.addEventListener("click", e=>{
  e.preventDefault();

  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on"); 
})

