function buildDomObjects(forecastData, location) {

    $('#forecast-container').html('');
    $('#city').html('');


    console.log(forecastData);
    console.log(location);

    let city = location.name;

    for (let i = 0; i < forecastData.length; i++) {

        let temp = forecastData[i].main.temp;
        let feels = forecastData[i].main.feels_like;
        let max = forecastData[i].main.temp_max;
        let low = forecastData[i].main.temp_min;
        let des = forecastData[i].weather[0].description;

        let timeDate = forecastData[i].dt;
        timeDate = new Date(timeDate * 1000);
        let formattedTime = new Date(timeDate).toDateString();


        $('#forecast').append(`
        <div class="card" style="width: 18rem;">
            <div class="card-header">
               <i class="bi bi-calendar3"></i>${formattedTime}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="bi bi-cloud-sun"></i>Temp: ${temp}</li>
                <li class="list-group-item"><i class="bi bi-clouds"></i> ${des}</li>
                <li class="list-group-item"><i class="bi bi-thermometer-half"></i>Feels Like: ${feels}</li>
                <li class="list-group-item"><i class="bi bi-thermometer-snow"></i>Low: ${low}</li>
                <li class="list-group-item"><i class="bi bi-thermometer-sun"></i>High: ${max}</li>
            </ul>
        </div>
        `)}

    //     $('#forecast').append(`
    //         <div class="row"
    //         <div class="col-lg-6"
    //         <div class="card">
    //             <div class="card-body">
    //             <h5 class="card-title">${formattedTime}</h5>
    //             <p class="card-text"> <hr>${temp}
    //             <br><hr>
    //                 ${formattedTime}
    //             <br><hr>
    //             feels like ${feels}
    //             <br><hr>
    //             high: ${max}
    //             <br>
    //             </p>
    //             </div>
    //         </div>
    //         </div>
    //         </div>`)
    // }

    $('#city').append(`<h3 class="text-center">Welcome to: ${city}</h3>`)
}

