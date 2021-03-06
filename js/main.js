const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo"); 
const gnbWeb = document.querySelector("#gnb");
const utilWeb = document.querySelector(".util"); 
const util_lis = document.querySelectorAll(".util>li");
const user = util_lis[0]
const gnb_lis = document.querySelectorAll("#gnb>li");


// 반응형 메뉴버튼
btnCall.addEventListener("click", e=>{
  e.preventDefault();
  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on"); 
})

// user 클릭이벤트
user.addEventListener("click", e =>{
  //e.preventDefault(); 막아두면 페이지 이동 못함
  const sub = e.currentTarget.querySelector(".sub");
  sub.style.display = "block"; 
})

// wep - header - util -2depth
util_lis.forEach(el =>{
  el.addEventListener("mouseenter", e=> {
    e.currentTarget.classList.add("on");
  })

  el.addEventListener("focusin", e => {
    const sub = e.currentTarget.querySelector(".sub");
    if(sub != null){
      sub.style.display = "block"; 
    }
  })
})


util_lis.forEach(el => {
  el.addEventListener("mouseleave", e=> {
    const sub = e.currentTarget.querySelector(".sub");
    if(sub != null){sub.style.display = "none";}
  })
  
  const utilSub = el.querySelector(".sub ul");
  if(utilSub != null){
    const lastEl = utilSub.lastElementChild;
    lastEl.addEventListener("focusout", e=>{
      e.currentTarget.closest(".sub").style.display = "none";
    })
  }
})





// web - header - gnb - 2depth
gnbWeb.addEventListener("mouseenter", e=>{
  const sub = e.target.querySelectorAll(".sub");
  const subArr = Array.from(sub);
  for(let el of subArr){
    el.style.display = "block";
  }
})

gnb_lis.forEach( li=>{
  li.addEventListener("mouseenter", e => {
    const depth = e.currentTarget.querySelector("a");
    depth.classList.add("on");
  })

  // 접근성-focusin
  li.addEventListener("focusin", e => {
    const sub = e.currentTarget.querySelector(".sub");
    if(sub != null){
      sub.style.display = "block";
    }return;
  })
})


gnbWeb.addEventListener("mouseleave", e=>{
  const sub = e.target.querySelectorAll(".sub");
  const subArr = Array.from(sub);
  for(let el of subArr){
    el.style.display = "none";
  }
})

gnb_lis.forEach( li=>{
  li.addEventListener("mouseleave", e => {
    const depth = e.currentTarget.children[0];
    depth.classList.remove("on");
  })

    // 접근성-focuout
    const sub = li.querySelector(".sub ul");
    //console.log(sub.lastElementChild);
    if( sub != null){
      const lastEl = sub.lastElementChild;
      lastEl.addEventListener("focusout", e => {
        e.currentTarget.closest(".sub").style.display = "none";
      })
    } return;
})

// index페이지에서만 사용. sub페이지 오류 잡기
const wrapBS = document.querySelector(".wrapBS");
if(wrapBS  != null){
  // figure - Swiper 동작 
const swiper = new Swiper('.wrapBS', {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50, //슬라이드 회전 각도 
    stretch: -100, //슬라이드간 거리 , 클수록 많이 겹침 
    depth: 400, // 깊이 효과값
    modifier: 1, //효과 배수  
    slideShadows: false, //슬라이더 그림자 
  },
  // Optional parameters
  direction: 'horizontal', //'vertical' 슬라이딩 방향 
  loop: true, //슬라이딩 순환여부 결정  
  speed: 1000, //슬라이딩 되는 속도 
  spaceBetween: 0, //사이간격 
  slidesPerView: 'auto', //하나의 화면당 보일 패널 갯수 
  centeredSlides: true,
  grabCursor: true, //스와이프시 마우스 커서모양 변경 

  // 페이징버튼 옵션 
  pagination: {
    el: '.swiper-pagination',
    type: "fraction"
  },

  // 좌우버튼 옵션
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
}
