let axios = require('axios')
const MOVIE_TOKEN = process.env.MOVIE_API_KEY

let cache = require("./cache")

class Movie {
    constructor(movieData){
        this.title = movieData.title;
        this.overview = movieData.overview;
    }
}






function getMovie(query){
    const cacheKey = 'movie-' + query;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_TOKEN}&language=en-US&page=1&include_adult=false&query=${cityName}`;

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

function parseM(movieData){
    try {
        let movieResults = [];
        movieData.movieResults.map(movies => {
            movieResults.push(new Movie(movies));
        });
        return Promise.resolve(movieResults);
    } catch (e){
        return Promise.reject(e)
    }
}



// let getMovie = async (request, response) => {
//     let cityName = request.query.cityName
//     let proxy = {
//         url: `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_TOKEN}&language=en-US&page=1&include_adult=false&query=${cityName}`,
//         method: 'get'
//     };

//     let movieProxy = await axios(proxy);
//     console.log(movieProxy)
//     let movieArray = [];
//     movieProxy.data.results.forEach(movies => {
//         movieArray.push(new Movie(movies));
//     });
//         response.status(200).send(movieArray)
//     }

    module.exports = getMovie;