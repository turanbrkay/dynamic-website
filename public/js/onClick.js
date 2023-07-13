
function openMovieLink(event, movieType) {
  event.preventDefault();
  var link = '/' + movieType + '/'+"naber";
  window.location.href = link;
}






/*var strips = document.querySelectorAll(".strip-string");
var moviesButton = document.getElementById("js-strip-movies");
var tvShowsButton = document.getElementById("js-strip-tvShows");
var trendingButton = document.getElementById("js-strip-trend");

function resetButtonStyle() {
  strips.forEach(function(strip) {
    strip.style.color = "#777";
    strip.style.borderBottom = "none";
  });

}

moviesButton.onclick = function() {
  getRecomendeds(sortedMovieCards,21,".js-recomended-movies",true);
  resetButtonStyle();
  moviesButton.style.color = "#28af95"
  moviesButton.style.borderBottom = "1px solid #28af95";

};
tvShowsButton.onclick = function() {
  getRecomendeds(sortedSeriesCards,21,".js-recomended-movies",true);
  resetButtonStyle();
  tvShowsButton.style.color = "#28af95"
  tvShowsButton.style.borderBottom = "1px solid #28af95";

};
trendingButton.onclick = function() {
  resetButtonStyle();
  trendingButton.style.color = "#28af95"
  trendingButton.style.borderBottom = "1px solid #28af95";
};
*/
