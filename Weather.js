let axios = require('axios')

const WEATHER_TOKEN = process.env.WEATHER_API_KEY
console.log(WEATHER_TOKEN);
let getWeather = async (request, response) => {
    let city_name = request.query.city_name
    let proxy = {
        url: `https://api.weatherbit.io/v2.0/forecast/daily?city=${city_name}&key=${WEATHER_TOKEN}`,
        method: 'GET',
    };

    let weatherProxy = await axios(proxy);
    console.log(weatherProxy.data)
    let weatherArray = [];
    weatherProxy.data.data.forEach(weather => {
        weatherArray.push(new Forecast(weather));
    });
    
        response.status(200).send(weatherArray)

}

class Forecast {
    constructor(weatherData){
        this.date = weatherData.date;
        this.description = weatherData.weather.description;
    }
}

module.exports = getWeather;