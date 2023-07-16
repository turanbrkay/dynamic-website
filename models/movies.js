const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const moviesSchema = new Schema({
  id:String,
  name: String,
  rating: String,
  type: String,
  duration: String,
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
  collection: 'MovieDB'
})      

const MovieDB = mongoose.model('MovieDB',moviesSchema);
module.exports = MovieDB;