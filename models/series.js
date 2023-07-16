const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const seriesSchema = new Schema({
  id:String,
  name: String,
  rating: String,
  type: String,
  season: String,
  episode: String,
  releaseDate: Date,
  poster: String,
  banner: String,
  genre: [String],
  country: String,
  director: String,
  production: String,
  actors: String, 
  maturity:String,
},
{
  timestamps: true // Koleksiyon adını burada belirtin
},
{
  collection: 'SeriesDB'
})   

const SeriesDB = mongoose.model('SeriesDB',seriesSchema);
module.exports = SeriesDB;