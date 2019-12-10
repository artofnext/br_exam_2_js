
// initialize Leaflet
var map = L.map('map').setView({lon: 28.437470, lat: 49.218677}, 16); 

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// show a marker on the map
// L.marker({lon: 31.1, lat: 48.3}).bindPopup('The center of the world').addTo(map);

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