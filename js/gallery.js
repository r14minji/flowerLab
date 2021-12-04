const body = document.querySelector("body");
const section = document.querySelector(".gallery");
const list = document.querySelector("#photoList");
const input = document.getElementById("search");
const btn = document.querySelector(".btnSearch");
const loading = document.querySelector(".loading");
const errMsg = document.querySelector(".errMsg");

//api 연결
const api_key = "e876201effa30e353ec16d8c4b313899";
const user_id = "194311789@N07";
const method1 = "flickr.people.getPhotos";
const method2 = "flickr.photos.search";
const per_page = 40;
const format = "json";

const url1 = `https://www.flickr.com/services/rest/?method=${method1}&api_key=${api_key}&user_id=${user_id}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

callData(url1);
window.onload = callData(url1);

// 검색어로 이미지 찾기
btn.addEventListener("click", e=>{
  let tag = input.value;
  const url2 = `https://www.flickr.com/services/rest/?method=${method2}&api_key=${api_key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}`;
  //console.log(tag);
  
  if(tag != ''){
    callData(url2);
    errMsg.style.display = "none";
  }else{
    errMsg.innerText = "검색어를 입력하세요.";
    errMsg.style.display = "block";
    list.classList.remove("on");
  }
})

//엔터로 검색하기
input.addEventListener("keyup", e =>{
  if(e.key == "enter"){
    let tag = input.value;
    const url2 = `https://www.flickr.com/services/rest/?method=${method2}&api_key=${api_key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}`;
    //console.log(tag);
    
    if(tag != ''){
      callData(url2);
      errMsg.style.display = "none";
    }else{
      errMsg.innerText = "검색어를 입력하세요";
      errMsg.style.display = "block";
      list.classList.remove("on");
    }
  }
})


//이미지 팝업창으로 보기
list.addEventListener("click", e => {
  e.preventDefault(); //  반드시 필요함. 넣어야 aside에 사진들어감.

  if(e.target == list) return

  let target = e.target.closest(".item").querySelector(".thumb");

  if(e.target == target){
    const imgSrc = target.parentElement.getAttribute("href");
    const pop = document.createElement("aside");
    let pops  = `
    <div class="con">
      <img src="${imgSrc}" alt="">
    </div>
    <span>close</span>
    `
    pop.innerHTML = pops;
    section.append(pop);
    body.style.overflow = 'hidden';
  }
})


//팝업창 닫기
section.addEventListener("click", e =>{
  e.preventDefault();
  //console.log(e.target);
  let popup = e.currentTarget.querySelector("aside");

  if(popup != null){
    const btnClose = popup.querySelector("span");
    if(e.target == btnClose){
      popup.remove();
      body.style.overflow = 'auto';
    }
  }
})



//함수만들기
function callData(url){
  loading.classList.remove("off");
  list.classList.remove("on");

  fetch(url)
  .then(data => {
    return data.json();
  })
  .then(json => {
    let items = json.photos.photo;
    console.log(json);



    if(items.length > 0){
      createList(items);
      delayLoading();
    }else{
      loading.classList.add("off");
      errMsg.innerText = "검색하신 이미지의 데이터가 없습니다.";
      errMsg.style.display = "block";
    }
  })
}


function createList(items){
  let htmls = "";
  items.forEach( item => {

    let title = item.title;
    if(title.length >17){
      title = title.substr(0,17);
    }

    htmls += `
    <li class="item">
    <div>
      <a href="https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg">
        <img src="https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg" class="thumb">
      </a>
        <p>${title}</p>
        <img src="http://www.flickr.com/buddyicons/${item.owner}.jpg" class="profile">
        <strong>${item.owner}</strong>
    </div>
  </li>
    `
  });
  list.innerHTML = htmls;
}


function delayLoading(){
  const imgs = list.querySelectorAll("img");
  let count = 0;
  for(let el of imgs){
    el.onload = () =>{ 
      count ++; 
    
      if(count === imgs.length) isoLayout();
    }

    const thumb = el.closest(".item").querySelector(".thumb");
    thumb.onerror  = e => {
      e.currentTarget.closest(".item").querySelector(".thumb").setAttribute("src", "k1.jpg")
    }

    const profile = el.closest(".item").querySelector(".profile");
    profile.onerror = e=>{
      e.currentTarget.closest(".item").querySelector(".profile").setAttribute("src", "https://www.flickr.com/images/buddyicon.gif")
    }
  };
}


function isoLayout(){
  loading.classList.add("off");
  list.classList.add("on");

  new Isotope("#photoList", {
    itemSelector: ".item",
    columnWidth: ".item",
    transitionDuration: "0.5s"
  })
}