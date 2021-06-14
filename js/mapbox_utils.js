const mapboxToken = MAPBOX_TOKEN;
mapboxgl.accessToken = mapboxToken;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [-71.0589, 42.3601],
    zoom: 12,

});

let marker;
let geocoder = setGeocoder();
addGeocodertoMap(geocoder);
mapEvent();

function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    });
}

function addGeocodertoMap(geocoder) {
    map.addControl(geocoder);
    geocoder.on('result', function (event) {
        setMarker(event.result.geometry.coordinates);
        marker.setPopup(displayPopUp(event.result.place_name));

        getForecast(event.result.geometry.coordinates);
    })
}


function setMarker(point) {
    if (!marker) {
        marker = new mapboxgl.Marker().setLngLat(point).addTo(map);
    } else {
        marker.setLngLat(point)
    }
}

function mapEvent() {
    map.on('click', function (e) {
        setMarker(e.lngLat);
        getForecast([e.lngLat.lng, e.lngLat.lat]);
    })
}

function displayPopUp(textdetails) {
    return new mapboxgl.Popup().setHTML(`<p>${textdetails}</p>`).addTo(map);
}