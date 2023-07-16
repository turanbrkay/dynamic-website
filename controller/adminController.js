const MoviesDB = require("../models/movies"),
      SeriesDB = require("../models/series"),
      mainJS = require('../public/js/main');


const admin_getMovieDB = (req,res) => {
  req.body.id = mainJS.generateCustomID(6);
  const movie = new MoviesDB(req.body)
  
  movie.save()
    .then((result) => {
      res.redirect('/admin');
    })
    .catch((err) => {
      console.log(err);
    })
}
const admin_getSerieDB = (req,res) => {
  req.body.id = mainJS.generateCustomID(6);
  const series = new SeriesDB(req.body)

  series.save()
    .then((result) => {
      res.redirect('/admin');
    })
    .catch((err) => {
      console.log(err);
    })
}


module.exports = {
  admin_getMovieDB,
  admin_getSerieDB
}