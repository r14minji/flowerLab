const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo"); 
const bgMo = document.querySelector(".bgMo")
const gnbMo = document.querySelectorAll("#gnb>li");

// 반응형 메뉴버튼
btnCall.addEventListener("click", e=>{
  e.preventDefault();
  bgMo.classList.toggle("on");
  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on"); 
})

gnbMo.forEach( li => {
  li.addEventListener("click", e => {
    e.currentTarget.querySelector("div").style.display = "block";
  })
})


// header - 2depth



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