var map;
var myLocation = { lat: 41.8623, lng: -87.6167 };
function initMap() {
 map = new google.maps.Map(document.getElementById("map"), {
    center: myLocation,
    zoom: 18,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
    }

  });
  var image = "../images/msi.jpg";
  var marker = new google.maps.Marker({
    position: myLocation,
    map: map,
    title: "Soldier Field",
    //icon: image
  });

  var info = "This is Soldier Field, Home of The Bears"

  var infowindow = new google.maps.InfoWindow({
    content: info
  });

  marker.addListener('mouseover',function(){
    infowindow.open(map,marker);
  });

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}