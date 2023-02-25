let axios = require('axios')
const MOVIE_TOKEN = process.env.MOVIE_API_KEY


class Movie {
    constructor(movieData){
        this.title = movieData.title;
        this.overview = movieData.overview;
    }
}

let getMovie = async (request, response) => {
    let cityName = request.query.cityName
    let proxy = {
        url: `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_TOKEN}&language=en-US&page=1&include_adult=false&query=${cityName}`,
        method: 'GET'
    };

    let movieProxy = await axios(proxy);
    console.log(movieProxy)
    let movieArray = [];
    movieProxy.data.results.forEach(movies => {
        movieArray.push(new Movie(movies));
    });
        response.status(200).send(movieArray)
    }

    module.exports = getMovie;