const seriesCards = [{
  name: 'Money Heist',
  rating: '8.3',
  year: '2017',
  type: 'series',
  season: 5,
  date: new Date("2017-05-02"),
  image: "../sources/img/money heist.jpg"
},
{
  name: 'How I Met Your Mother',
  rating: '8.3',
  year: '2005-2014',
  type: 'series',
  season: 9,
  date: new Date("2005-09-19"),
  image: "../sources/img/series1.jpg"
},
{
  name: 'H/Jack',
  rating: '7.8',
  year: '2016-2017',
  type: 'series',
  season: 2,
  date: new Date("2016-09-22"),
  image: "../sources/img/series2.jpg"
},
{
  name: 'Platonic',
  rating: '8.0',
  year: '2021',
  type: 'series',
  season: 1,
  date: new Date("2021-03-12"),
  image: "../sources/img/series3.jpg"
},
{
  name: 'Tough as Nails',
  rating: '6.9',
  year: '2020-present',
  type: 'series',
  season: 3,
  date: new Date("2020-07-08"),
  image: "../sources/img/series4.jpg"
},
{
  name: 'Before The 90 Days',
  rating: '6.7',
  year: '2014-present',
  type: 'series',
  season: 6,
  date: new Date("2014-01-12"),
  image: "../sources/img/series5.jpg"
},
{
  name: 'The Pink Panther',
  rating: '7.1',
  year: '1993-1996',
  type: 'series',
  season: 2,
  date: new Date("1993-09-11"),
  image: "../sources/img/series6.jpg"
},
{
  name: 'The King Who Never Was',
  rating: '7.5',
  year: '2022-present',
  type: 'series',
  season: 1,
  date: new Date("2022-06-16"),
  image: "../sources/img/series.jpg"
},
{
  name: 'The Righteous Gemstones',
  rating: '8.0',
  year: '2019-present',
  type: 'series',
  season: 2,
  date: new Date("2019-08-18"),
  image: "../sources/img/series7.jpg"
},
{
  name: 'Backyard',
  rating: '7.4',
  year: '2015-present',
  type: 'series',
  season: 4,
  date: new Date("2015-08-23"),
  image: "../sources/img/series8.jpg"
},
{
  name: 'American Monster',
  rating: '6.7',
  year: '2016-present',
  type: 'series',
  season: 5,
  date: new Date("2016-06-01"),
  image: "../sources/img/series9.jpg"
},
{
  name: 'Paramedics on Scene',
  rating: '7.8',
  year: '2019-present',
  type: 'series',
  season: 3,
  date: new Date("2019-01-07"),
  image: "../sources/img/series10.jpg"
},
{
  name: 'Hoffman Family Gold',
  rating: '7.1',
  year: '2018',
  type: 'series',
  season: 1,
  date: new Date("2018-12-03"),
  image: "../sources/img/series11.jpg"
},
{
  name: 'Joe Pickeit',
  rating: '7.3',
  year: '2018-2019',
  type: 'series',
  season: 2,
  date: new Date("2018-05-27"),
  image: "../sources/img/series12.jpg"
}]

const updatedMovieCards = seriesCards.map((movie, index) => {
  const itemId = index + 1;
  return { ...movie, itemId };
});

var sortedSeriesCards = updatedMovieCards.sort(function(a, b) {
  return b.date - a.date;
});
module.exports = sortedSeriesCards;