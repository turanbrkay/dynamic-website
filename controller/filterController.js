const MoviesDB = require("../models/movies"),
      SeriesDB = require("../models/series"),
      mainJS = require('../public/js/main');

const filter_movieAllDB = (req,res)=> {
  const moviePromise = MoviesDB.find().exec();
  const seriesPromise = SeriesDB.find().exec();

  Promise.all([moviePromise, seriesPromise])
    .then(([movies, series]) => {
      res.render('filter/movie', { movies, series });
      })
      .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
      });
  
};

const filter_serieAllDB = (req,res)=> {
  const moviePromise = MoviesDB.find().exec();
  const seriesPromise = SeriesDB.find().exec();

  Promise.all([moviePromise, seriesPromise])
    .then(([movies, series]) => {
      res.render('filter/tv', { movies, series });
      })
      .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
      });
  
};

module.exports = {
  filter_movieAllDB,
  filter_serieAllDB
}