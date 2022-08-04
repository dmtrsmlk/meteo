fetch('http://api.open-meteo.com/v1/forecast?latitude=50.4422&longitude=30.5367&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&timezone=Europe%2FMoscow')
    .then(function (resp) {return resp.json()})
    .then(function (data){
        console.log(data);
        document.querySelector('.city').textContent = data.latitude + '/' + data.longitude
        for(let i = 0; i < 7; i++){
            document.querySelector(`.card-title${i}`).textContent = moment(data.daily.time[i]).format('MMMM Do YYYY')
            document.querySelector(`.card-text${i}`).textContent = data.daily.temperature_2m_max[i] + '°C' + ' / ' +data.daily.temperature_2m_min[i] + '°C'
            if(data.daily.weathercode[i] == 0) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Clear Sky'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/clear.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 1) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Mainly clear'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/mainly_clear.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 2) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Partly Cloudy'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/mainly_clear.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 3) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Overcast'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/overcast.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 45) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Fog'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/fog.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 48) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Depos Rime Fog'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/fog.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 51) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Light Drizzle'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/drizzle.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 53) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Moderate Drizzle'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/drizzle.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 55) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Dense Drizzle'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/drizzle.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 56) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Light Freezing Drizzle'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/freezing_drizzle.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 57) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Dense Freezing Drizzle'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/freezing_drizzle.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 61) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Slight Rain'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/rain.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 63) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Moderate Rain'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/rain.png" alt="" style="width: 125px">';

            }
            else if(data.daily.weathercode[i] == 65) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Heavy Rain'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/rain.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 66) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Light Freezing Rain'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/freezing_rain.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 67) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Heavy Freezing Rain'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/freezing_rain.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 71) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Slight Snowfall'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/snow.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 73) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Moderate Snowfall'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/snow.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 75) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Heavy Snowfall'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/snow.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 77) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Snow Grains'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/snow_grain.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 80) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Slight Rain Showers'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/rain_shower.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 81) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Moderate Rain Showers'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/rain_shower.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 82) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Violent Rain Showers'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/rain_shower.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 85) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Slight Snow Showers'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/snow_shower.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 86) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Heavy Snow Showers'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/snow_shower.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 95) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Thunderstorm'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/thunderstorm.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 96) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Thunderstorm with slight hail'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/thunderstorm.png" alt="" style="width: 125px">';
            }
            else if(data.daily.weathercode[i] == 99) {
                document.querySelector(`.card-subtitle${i}`).textContent = 'Thunderstorm with heavy hail'
                document.querySelector(`.w-img${i}`).innerHTML = '<img src = "src/thunderstorm.png" alt="" style="width: 125px">';
            }
                else {
                document.querySelector(`.card-subtitle${i}`).textContent = 'no data'
            }
        }


    }).catch(function () {

});
