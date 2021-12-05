// 클래스 추가
const H2s = document.querySelectorAll("h2");
const H3s = document.querySelectorAll("h3");
const SPANs = document.querySelectorAll("span");
const IMGs = document.querySelectorAll("img");

addClass(H2s, "sa"), addClass(H2s, "sa-up");
addClass(H3s, "sa"), addClass(H3s, "sa-up");
addClass(SPANs, "sa"), addClass(SPANs, "sa-up");
addClass(IMGs, "sa"), addClass(IMGs, "sa-scaleDown");

function addClass(arr, className){
  for( let el of arr){
    el.classList.add(className);
  }
}

// Scroll Animation (sa, 스크롤 애니메이션)
const saTriggerMargin = 300;
let saTriggerHeight = 0;
const saElementList = document.querySelectorAll('.sa');


const saFunc =()=>{

  for (const el of saElementList) {

    if (!el.classList.contains('show')) {
      if(el.dataset.saTrigger){
        saTriggerHeight = document.querySelector(el.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
      }else{
        saTriggerHeight = el.getBoundingClientRect().top + saTriggerMargin;
      }

      if (window.innerHeight > el.getBoundingClientRect().top + saTriggerMargin){
        el.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);
