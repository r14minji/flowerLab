const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo"); 
const gnbMo = document.querySelectorAll("#gnb>li");

// 반응형 메뉴버튼
btnCall.addEventListener("click", e=>{
  e.preventDefault();

  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on"); 
})

gnbMo.forEach( li => {
  li.addEventListener("click", e => {
    e.currentTarget.querySelector("div").style.display = "block";
  })
})
