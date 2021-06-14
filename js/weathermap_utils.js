function getForecast(coordinates) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: coordinates[1],
            lon: coordinates[0],
            units: "imperial"
        },
        success: function (data) {
            console.log(data);
            buildDomObjects(filterWeather(data), filterCity(data));
        }
    });
}

$(document).ready(function(e) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            q: "Boston, USA",
            units: "imperial",
        },

        success: function (data) {
            buildDomObjects(filterWeather(data), filterCity(data))
        }
    });
});


function filterWeather(data) {
    let arr = [];
    for (let i = 0; i < data.list.length; i++) {
        if (i % 8 === 0) {
            arr.push(data.list[i]);
        }
    }
    return arr;
}

function filterCity(data) {
    return data.city;
}