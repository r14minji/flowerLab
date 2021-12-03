/*
키 : e876201effa30e353ec16d8c4b313899

url: https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value
*/

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
  const imgs = document.querySelectorAll("img");
  let count = 0;
  for(let el of imgs){
    el.onload = () =>{ 
      count ++; 
    
      if(count === imgs.length) isoLayout();
    }
  };
}

function isoLayout(){
  //loading.classList.add("off");

  new Isotope("#photoList", {
    itemSelector: ".item",
    columnWidth: ".item",
    transitionDuration: "0.5s"
  })
}