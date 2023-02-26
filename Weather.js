let axios = require('axios')
let cache = require('./cache')

const WEATHER_TOKEN = process.env.WEATHER_API_KEY
console.log(WEATHER_TOKEN);



function getWeather(query){
    const cacheKey = 'weather-' + query;
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city_name}&key=${WEATHER_TOKEN}`;
    
    if (cache[cacheKey] && (Date.now() - cache[cacheKey].timestamp < 30000)){
        console.log('cache hits');
    } else {
        console.log("cache miss");
        cache[key] = {};
        cache[key].timestamp = Date.now();
        cache[key].data = axios.get(url)
        .then(response => parseM(response.data));
    }
}

function parseW(weatherData){
    try {
        let weatherResults = [];
        weatherData.weatherResults.map(weather => {
            weatherResults.push(new Movie(weather));
        });
        return Promise.resolve(weatherResults);
    } catch (e){
        return Promise.reject(e)
    }
}



// let getWeather = async (request, response) => {
//     let city_name = request.query.city_name
//     let proxy = {
//         url: `https://api.weatherbit.io/v2.0/forecast/daily?city=${city_name}&key=${WEATHER_TOKEN}`,
//         method: 'GET',
//     };

//     let weatherProxy = await axios(proxy);
//     console.log(weatherProxy.data)
//     let weatherArray = [];
//     weatherProxy.data.data.forEach(weather => {
//         weatherArray.push(new Forecast(weather));
//     });
    
//         response.status(200).send(weatherArray)

// }

class Forecast {
    constructor(weatherData){
        this.date = weatherData.date;
        this.description = weatherData.weather.description;
    }
}

module.exports = getWeather;