
const express = require("express"),
      router = express.Router(),
      sortedMovieCards = require('../public/js/movieCards'),
      MoviesDB = require("../models/movies"),
      SeriesDB = require("../models/series"),
      mainJS = require('../public/js/main'),
      sortedSeriesCards = require('../public/js/seriesCards');


function getMovieList(Id,movieList) {
// itemId'ye göre filtreleme işlemi yaparak ilgili film listesini döndürün
return movieList.filter(movie => movie.itemId == Id);
}

router.get('/',(req,res)=> {
    res.render('intro')
});

router.get('/home',(req,res)=> {
    const moviePromise = MoviesDB.find().exec();
    const seriesPromise = SeriesDB.find().exec();

    Promise.all([moviePromise, seriesPromise])
      .then(([movies, series]) => {
        res.render('home', { movies, series});
        })
        .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
        });
        
});



router.get('/movie/:movieName',(req,res)=> {
    const itemId = req.params.movieName.split('-').pop();
    const movieInfo = getMovieList(itemId,sortedMovieCards);
    res.render('player',{ movieInfo:movieInfo }) 
});
router.get('/tv/:seriesName',(req,res)=> {
    const itemId = req.params.seriesName.split('-').pop();
    const movieInfo = getMovieList(itemId,sortedSeriesCards);
    res.render('player',{ movieInfo:movieInfo }) 
});

router.get('/error',(req,res)=> {
    res.render('errorPage',{sortedMovieCards:sortedMovieCards}) 
});

module.exports = router; // router variable'ını dışarıdan kullanıma izin verdik