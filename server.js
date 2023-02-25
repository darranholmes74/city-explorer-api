'use strict'
require('dotenv').config();
const getWeather = require("./Weather")
const getMovie = require("./Movie")

const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
// const getMovies = require('/Movie');


const PORT = process.env.PORT;




app.use(cors());

// app.get('./movie', getMovies);

app.get('/search', (request, response) => {
    console.log(request.query);
    response.send('Working on it');

});


class Movie {
    constructor(movieData){
        this.title = movieData.title;
        this.overview = movieData.overview;
    }
}


app.get('/movie', getMovie);



app.get('/weather', getWeather);

app.use((err, request, response, next) => {
    
    
    console.log(err);
    response.status(500).send('BAD THINGS OCCURRED');
});

app.listen(PORT, () => {
    console.log('App is running');
});