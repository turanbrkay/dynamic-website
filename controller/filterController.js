const MoviesDB = require("../models/movies"),
      SeriesDB = require("../models/series"),
      mainJS = require('../public/js/main');

const filter_getAllDB = (req,res)=> {
  const moviePromise = MoviesDB.find().exec();
  const seriesPromise = SeriesDB.find().exec();

  Promise.all([moviePromise, seriesPromise])
    .then(([movies, series]) => {
      res.render('filter', { movies, series });
      })
      .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
      });
  
};

module.exports = {
  filter_getAllDB
}