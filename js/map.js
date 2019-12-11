// initialize Leaflet
let map = L.map('map').setView({lon: 28.437470, lat: 49.218677}, 16); 

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// Custom marker
let customIcon = L.icon({
  iconUrl: '../img/Logo_marker.svg',
  shadowUrl: '../img/Logo_shadow.svg',

  iconSize:     [100, 100], // size of the icon
  shadowSize:   [100, 100], // size of the shadow
  iconAnchor:   [10, 100], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 75],  // the same for the shadow
  popupAnchor:  [-3, -70] // point from which the popup should open relative to the iconAnchor
});

// show a marker on the map
L.marker({lon: 28.437470, lat: 49.218677}).bindPopup('Here we are!').addTo(map);
L.marker({lon: 28.437470, lat: 49.218677}, {icon: customIcon}).bindPopup('Here we are!').addTo(map);

// get user geolocation
let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    let crd = pos.coords;
    
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    
    L.marker({lon: crd.longitude, lat: crd.latitude}).bindPopup('You are here').addTo(map);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);