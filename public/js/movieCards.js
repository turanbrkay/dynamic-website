const movieCards = [{
  name: 'Ant-Man',
  rating: '7.3',
  year: '2015',
  type: 'movie',
  duration: '117',
  date: new Date("2015-07-17"),
  image: "../sources/img/ant man.jpg"
},
{
  name: 'Avengers',
  rating: '8.4',
  year: '2012',
  type: 'movie',
  duration: '143',
  date: new Date("2012-05-04"),
  image: "../sources/img/avengers.jpg"
},
{
  name: 'Jurassic World',
  rating: '7.0',
  year: '2015',
  type: 'movie',
  duration: '124',
  date: new Date("2015-06-12"),
  image: "../sources/img/jurassic world.jpg"
},
{
  name: 'Uncharted',
  rating: '7.8',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-02-18"),
  image: "../sources/img/uncharted.webp"
},
{
  name: 'Topgun',
  rating: '6.9',
  year: '1986',
  type: 'movie',
  duration: '110',
  date: new Date("1986-05-16"),
  image: "../sources/img/topgun.jpg"
},
{
  name: 'Thor Love of Thunder',
  rating: 'N/A',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-05-06"),
  image: "../sources/img/thor love of thunder.jpg"
},
{
  name: 'Spiderman',
  rating: '7.3',
  year: '2002',
  type: 'movie',
  duration: '121',
  date: new Date("2002-05-03"),
  image: "../sources/img/spiderman.jpg"
},
{
  name: 'Moon Night',
  rating: '7.3',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-03-30"),
  image: "../sources/img/moon knight.jpg"
},
{
  name: 'Kota Factory',
  rating: '9.1',
  year: '2019',
  type: 'movie',
  duration: '45',
  date: new Date("2019-04-16"),
  image: "../sources/img/kota factory.jpg"
},
{
  name: 'K.G.F',
  rating: '8.2',
  year: '2018',
  type: 'movie',
  duration: '155',
  date: new Date("2018-12-20"),
  image: "../sources/img/KGF.jpg"
},
{
  name: 'John Wick',
  rating: '7.4',
  year: '2014',
  type: 'movie',
  duration: '101',
  date: new Date("2014-10-24"),
  image: "../sources/img/Jhon Wick.jpg"
},
{
  name: 'Eternals',
  rating: '7.0',
  year: '2021',
  type: 'movie',
  duration: '156',
  date: new Date("2021-11-05"),
  image: "../sources/img/eternals.jpg"
},
{
  name: 'Eesho',
  rating: 'N/A',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-01-01"),
  image: "../sources/img/eesho.jpeg"
},
{
  name: 'Mrs. Chatterjee',
  rating: 'N/A',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-01-01"),
  image: "../sources/img/film1.jpg"
},
{
  name: 'Fear the Invisible Man',
  rating: 'N/A',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-01-01"),
  image: "../sources/img/film2.jpg"
},
{
  name: 'The Flash',
  rating: 'N/A',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-01-01"),
  image: "../sources/img/film3.jpg"
},
{
  name: 'Collage Romange',
  rating: 'N/A',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-01-01"),
  image: "../sources/img/collage romance.jpg"
},
{
  name: 'The Idol',
  rating: 'N/A',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-01-01"),
  image: "../sources/img/film4.jpg"
},
{
  name: 'Unicorn',
  rating: 'N/A',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-01-01"),
  image: "../sources/img/film5.jpg"
},
{
  name: 'Dead City',
  rating: 'N/A',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-01-01"),
  image: "../sources/img/film7.jpg"
},
{
  name: 'Under Cover Under Age',
  rating: 'N/A',
  year: '2022',
  type: 'movie',
  duration: 'N/A',
  date: new Date("2022-01-01"),
  image: "../sources/img/series13.jpg"
}]

const updatedMovieCards = movieCards.map((movie, index) => {
  const itemId = index + 1;
  return { ...movie, itemId };
});

var sortedMovieCards = updatedMovieCards.sort(function(a, b) {
  return b.date - a.date;
});

module.exports = sortedMovieCards;