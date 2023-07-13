


/*function getRecomendeds(sortedList, count, selector, isMovie) {
  var list = sortedList.slice(0, count);
  var cardHTML = '';

  function addHyphensBetweenWords(str) {
    return str.split(' ').join('-');
  }
  
  for (var i = 0; i < list.length; i++) {
    cardHTML += `
        <div class="movie-item">
          <div class="movie-border">
            
            <a href="/${list[i].type}/" data-tip="65597?/cachef208" class="tooltipstered" style="opacity: 1;"> 
              <div class="quality">HD</div> 
              <div class="movie-poster"> 
                <div><img class=" lazyloaded" alt="${list[i].name}" src="${list[i].image}"></div> 
              </div> 
            </a>

            <a href="/${list[i].type}/${addHyphensBetweenWords(list[i].name)}" class="name">${list[i].name}</a>

            <div class="movie-info"> 

    `;
    
    if (isMovie) {
      cardHTML += `
              <div class="meta"> <span>${list[i].year}</span><span>${list[i].duration}</span> </div> 
              <div class="type">movie</div> 
      `;
    } else {
      cardHTML += `
              <div class="meta"> <span>S${list[i].season}</span><span>EP 14</span> </div> 
              <div class="type">tv</div> 
      `;
    }
    
    cardHTML += `
              </div>
            </div>
          </div>
    `;
    
    
  }
  console.log(cardHTML);
  document.querySelector(selector).innerHTML = cardHTML;
}
getRecomendeds(sortedMovieCards,14,'#js-latest-movie',true);
//getRecomendeds(sortedSeriesCards,14,".js-latest-TVShows",false);
getRecomendeds(sortedMovieCards,20,'#filter-content',true);


//getRecomendeds(sortedMovieCards,21,".js-recommended-movies",true);*/



