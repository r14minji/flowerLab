/*
키 : e876201effa30e353ec16d8c4b313899

url: https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value
*/

const section = document.querySelector(".gallery");
const list = document.querySelector("#photoList");
const searchBox = document.getElementById("searchBox");
const loading = document.querySelector(".loading");
const errMsg = document.querySelector(".errMsg");


const api_key = "e876201effa30e353ec16d8c4b313899";
const user_id = "194311789@N07";
const method1 = "flickr.people.getPhotos";
const method2 = "flickr.interestingness.getList";
const per_page = 20;
const format = "json";

const url1 = `https://www.flickr.com/services/rest/?method=${method1}&api_key=${api_key}&user_id=${user_id}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

callData(url1);

//이벤트

list.addEventListener("click", e => {
  e.preventDefault(); //  반드시 필요함. 넣어야 aside에 사진들어감.
  let target = e.target.closest(".item").querySelector("img");



    const imgSrc = target.parentElement.getAttribute("href");
    const pop = document.createElement("aside");
      let pops  = `
      <div class="con">
      <img src="${imgSrc}" alt="">
      </div>
      <div class="txt">
      <p>title</p>
      <img src="" alt="">
      <strong>owner</strong>
      </div>
      <span>close</sp>
    `
    pop.innerHTML = pops;
    section.append(pop);
})





//함수
function callData(url){

  fetch(url)
  .then(data => {
    return data.json();
  })
  .then(json => {
    let items = json.photos.photo;
    console.log(json);
    createList(items);
    delayLoading();
  })
}

function createItems(items){
  return items;
}

function createList(items){
  let htmls = "";
  items.forEach( item => {
    
    htmls += `
    <li class="item">
    <div>
      <a href="https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg">
        <img src="https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg" alt="${item.title}">
      </a>  
      <p></p>  
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