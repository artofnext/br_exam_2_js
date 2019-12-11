
// initialize Leaflet
var map = L.map('map').setView({lon: 28.437470, lat: 49.218677}, 16); 

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// Custom marker
var customIcon = L.icon({
  iconUrl: '../img/insta_ico.png',
  shadowUrl: '../img/insta_ico.png',

  iconSize:     [40, 60], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 59], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 39],  // the same for the shadow
  popupAnchor:  [-3, -60] // point from which the popup should open relative to the iconAnchor
});

// show a marker on the map
L.marker([28.437470, 49.218677], {icon: customIcon}).bindPopup('Custom marker').addTo(map);

// get user geolocation
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    
    L.marker({lon: crd.longitude, lat: crd.latitude}).bindPopup('You are here').addTo(map);
    // map = L.map('map').setView({lon: crd.latitude, lat: crd.longitude}, 8);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);