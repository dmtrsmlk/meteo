let codes = {
    0:{
        pname: "Clear",
        src: "src/clear.png",
        color: "darkorange"
    },
    1: {
        pname: "Mainly clear",
        src: "src/mainly_clear.png",
        color: "blue"
    },
    2: {
        pname: "Partly cloudy",
        src: "src/mainly_clear.png",
        color: "gray"
    },
    3: {
        pname: "Overcast",
        src: "src/overcast.png",
        color: "gray"

    },
    45: {
        pname: "Fog",
        src: "src/fog.png",
        color: "dimgray"
    },
    48: {
        pname: "Depositing rime fog",
        src: "src/fog.png",
        color: "dimgray"
    },
    51: {
        pname: "Light drizzle",
        src: "src/drizzle.png",
        color: "cadetblue"

    },
    53: {
        pname: "Moderate drizzle",
        src: "src/drizzle.png",
        color: "cadetblue"
    },
    55: {
        pname: "Dense drizzle",
        src: "src/drizzle.png",
        color: "cadetblue"
    },
    56: {
        pname: "Light freezing drizzle",
        src: "src/freezing_drizzle.png",
        color: "cornflowerblue"
    },
    57: {
        pname: "Dense freezing drizzle",
        src: "src/freezing_drizzle.png",
        color: "cornflowerblue"
    },
    61: {
        pname: "Slight rain",
        src: "src/rain.png",
        color: "mediumblue"
    },
    63: {
        pname: "Moderate rain",
        src: "src/rain.png",
        color: "mediumblue"
    },
    65: {
        pname: "Heavy rain",
        src: "src/rain.png",
        color: "mediumblue"
    },
    66: {
        pname: "Light freezing rain",
        src: "src/freezing_rain.png",
        color: "royalblue"
    },
    67: {
        pname: "Heavy freezing rain",
        src: "src/freezing_rain.png",
        color: "royalblue"
    },
    71: {
        pname: "Slight snow fall",
        src: "src/snow.png",
        color: "powderblue"
    },
    73: {
        pname: "Moderate snow fall",
        src: "src/snow.png",
        color: "powderblue"
    },
    75: {
        pname: "Heavy snow fall",
        src: "src/snow.png",
        color: "powderblue"
    },
    77: {
        pname: "Snow grains",
        src: "src/snow_grains.png",
        color: "mediumslateblue"
    },
    80: {
        pname: "Slight rain showers",
        src: "src/rain_shower.png",
        color: "blue"
    },
    81: {
        pname: "Moderate rain showers",
        src: "src/rain_shower.png",
        color: "blue"

    },
    82: {
        pname: "Heavy rain showers",
        src: "src/rain_shower.png",
        color: "blue"
    },
    85:{
        pname: "Slight snow showers",
        src: "src/snow_shower.png",
        color: "deepskyblue"
    },
    86: {
        pname: "Heavy snow showers",
        src: "src/snow_shower.png",
        color: "deepskyblue"
    },
    95: {
        pname: "Slight to moderate thunderstorm",
        src: "src/thunderstorm.png",
        color: "midnightblue"
    },
    96: {
        pname: "Thunderstorm with slight hail",
        src: "src/thunderstorm.png",
        color: "midnightblue"
    },
    99: {
        pname: "Thunderstorm with heavy hail",
        src: "src/thunderstorm.png",
        color: "midnightblue"
    }
};
function runQ(a, b) {
    let latitude = a
    let longitude = b
    let attributes = 'weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min'
    let timezone = 'Europe'
    let region = 'Moscow'
    let apiURL = `http://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=${attributes}&timezone=${timezone}%2F${region}`

    fetch(apiURL)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            for (let i = 0; i < 100; i++) {
                const subtitle = document.querySelector(`.card-subtitle${i}`)
                const img = document.querySelector(`.w-img${i}`)
                const title = document.querySelector(`.card-title${i}`)
                const text = document.querySelector(`.card-text${i}`)

                title.textContent = moment(data.daily.time[i]).format('MMMM Do YYYY')
                text.textContent = data.daily.temperature_2m_max[i] + '°C' + ' / ' + data.daily.temperature_2m_min[i] + '°C'
                for (let key in codes) {
                    if (data.daily.weathercode[i] == key) {
                        subtitle.textContent = codes[key].pname
                        subtitle.style.color = codes[key].color
                        img.innerHTML = '<img src = "' + codes[key].src + '" style="width: 125px">';
                    }
                }
            }
        }).catch(function () {

    });
}
