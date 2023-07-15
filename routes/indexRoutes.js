const express = require("express"),
      router = express.Router(),
      sortedMovieCards = require('../public/js/movieCards'),
      sortedSeriesCards = require('../public/js/seriesCards');


function getMovieList(Id,movieList) {
// itemId'ye göre filtreleme işlemi yaparak ilgili film listesini döndürün
return movieList.filter(movie => movie.itemId == Id);
}

router.get('/',(req,res)=> {
    res.render('main')
});
router.get('/home',(req,res)=> {
    res.render('home',{sortedMovieCards:sortedMovieCards, sortedSeriesCards: sortedSeriesCards})
});
router.get('/filter',(req,res)=> {
    res.render('filter',{sortedMovieCards:sortedMovieCards}) 
});
router.get('/admin',(req,res)=> {
    res.render('admin') 
});
router.get('/movie/:movieName',(req,res)=> {
    const itemId = req.params.movieName.split('-').pop();
    const movieInfo = getMovieList(itemId,sortedMovieCards);
    res.render('player',{ movieInfo:movieInfo }) 
});
router.get('/series/:seriesName',(req,res)=> {
    const itemId = req.params.seriesName.split('-').pop();
    const movieInfo = getMovieList(itemId,sortedSeriesCards);
    res.render('player',{ movieInfo:movieInfo }) 
});

router.get('/error',(req,res)=> {
    res.render('errorPage',{sortedMovieCards:sortedMovieCards}) 
});

module.exports = router; // router variable'ını dışarıdan kullanıma izin verdik