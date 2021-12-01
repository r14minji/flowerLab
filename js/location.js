var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
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
	},
	{
			title: '본사 신관', 
			latlng: new kakao.maps.LatLng(37.5586026,126.932745),
			imgSrc: "img/mark2.png",
			imgSize : new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
			imgOption : {offset: new kakao.maps.Point(27, 69)},
	},
	{
			title: '제주  지사', 
			latlng: new kakao.maps.LatLng(33.5054319,126.4649369),
			imgSrc : "img/mark3.png",
			imgSize : new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
			imgOption : {offset: new kakao.maps.Point(27, 69)},
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

	setCenter(positions[i].latlng)
}





var imageSrc = 'img/mark1.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  













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