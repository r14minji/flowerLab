const vidList = document.querySelector(".vidList");



const url = ``;

fetch(url)
.then(data => {
  return data.json();
})
.then( json => {
  console.log(json);
})