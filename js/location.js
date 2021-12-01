var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const dts = document.querySelectorAll("dt");
const dts_a = document.querySelectorAll("dt>a");
const dds = document.querySelectorAll("dd");
let drag = true;
let zoom =false; 


var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴





// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
	{
			title: '본사 본관', 
			latlng: new kakao.maps.LatLng(37.4960228,127.0377661),
			imgSrc: "img/mark1.png",
			imgSize: new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
			imgOption: {offset: new kakao.maps.Point(27, 69)},
			button : dts_a[0],
	},
	{
			title: '본사 신관', 
			latlng: new kakao.maps.LatLng(37.5586026,126.932745),
			imgSrc: "img/mark2.png",
			imgSize : new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
			imgOption : {offset: new kakao.maps.Point(27, 69)},
			button : dts_a[1],
	},
	{
			title: '제주  지사', 
			latlng: new kakao.maps.LatLng(33.5054319,126.4649369),
			imgSrc : "img/mark3.png",
			imgSize : new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
			imgOption : {offset: new kakao.maps.Point(27, 69)},
			button : dts_a[2],
	},
];

	
for (var i = 0; i < positions.length; i ++) {

	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			map: map, // 마커를 표시할 지도
			position: positions[i].latlng, // 마커를 표시할 위치
			title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
			image : new kakao.maps.MarkerImage(positions[i].imgSrc, positions[i].imgSize, positions[i].imgOption) // 마커 이미지 
	});


	positions[i].button.addEventListener("click", e => {
		e.preventDefault();
		setCenter(positions[i].latlng);
	})
}


// 탭 클릭시 컨텐츠 이동
dts.forEach(( el , index) => {
	el.addEventListener("click", e => {
		let isOn = e.currentTarget.classList.contains("on");
		if (isOn) return;
		activation(dts, index);
		activation(dds, index);
	})
})

function activation(arr, index){
	for( let i of arr){
		i.classList.remove("on");
	}
	arr[index].classList.add("on");
}



//지도이동시키기 함수 (중요)

function setCenter(target) {            
	var moveLatLon = target;
	
	map.setCenter(moveLatLon);
}

//지도에 컨트롤 올리기
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마우스 드레그 불가, 줌 가능
setZoomable(zoom);
function setZoomable(zoomable) {
	map.setZoomable(zoomable);    
}
setDraggable(drag);
function setDraggable(draggable) {
	map.setDraggable(draggable);    
}