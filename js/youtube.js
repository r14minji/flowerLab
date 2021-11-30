const vidList = document.querySelector(".vidList");


const key = "AIzaSyCB33AAQUtZKdJsxck78NerCW1I2nv_yYo";
const playlistId = "PL5jd_nA7BbYt11Y_TKhR4-98uEaZv8m8F";
const num = 8;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;


fetch(url)
.then(data => {
  return data.json();
})
.then( json => {
  console.log(json.items);

  const items = json.items;
  let result = '';
  let count = 0;
  items.forEach( item => {
    count ++;

    let title = item.snippet.title;
    if( title.length > 80) { 
      title = title.substr(0, 80) +"...";
    }
    let description = item.snippet.description;
    if(description.length > 400){  
      description = description.substr(0, 400) + "...";
    }

    result += `
    <article>
      <strong>0${count}</strong>
      <h2>${title}</h2>
      <p>${description}</p>
      <a href="${item.snippet.resourceId.videoId} class="pic">
        <img src="${item.snippet.thumbnails.medium.url}">
      </a>
    </article>
    `
  });
  vidList.innerHTML = result;
})