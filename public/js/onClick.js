const dayDiv = document.querySelector('div[data-name="day"]');
const weekDiv = document.querySelector('div[data-name="week"]');
const monthDiv = document.querySelector('div[data-name="month"]');
const moviesDiv = document.querySelector('div[data-name="movies"]');
const tvShowsDiv = document.querySelector('div[data-name="tv shows"]');
const trendingDiv = document.querySelector('div[data-name="trending"]');

const stripsSidebar = document.querySelectorAll('.strip-sidebar');
const stripsMain = document.querySelectorAll('.strips-main');
// Başlangıçta hepsi none olacak şekilde ayarla
weekDiv.style.display = 'none';
monthDiv.style.display = 'none';
tvShowsDiv.style.display = 'none';
trendingDiv.style.display = 'none';

stripsSidebar.forEach(strip => {
  strip.addEventListener('click', function() {
    // Tüm strip-string elementlerinin yazı rengini gri yap
    stripsSidebar.forEach(strip => {
      strip.classList.remove('active');
    });

    // Tüm div elementlerinin style.display özelliğini 'none' yap
    const divs = [dayDiv, weekDiv, monthDiv];
    divs.forEach(div => {
      div.style.display = 'none';
    });

    // Tıklanan strip-string elementinin yazı rengini mavi yap
    this.classList.add('active');

    // Tıklanan strip-string elementine ait data-name div'inin style.display özelliğini 'block' yap
    const selectedDiv = document.querySelector(`div[data-name="${this.textContent.toLowerCase()}"]`);
    selectedDiv.style.display = 'block';
  });
});

stripsMain.forEach(strip => {
  strip.addEventListener('click', function() {
    // Tüm strip-string elementlerinin yazı rengini gri yap
    stripsMain.forEach(strip => {
      strip.classList.remove('active');
    });

    // Tüm div elementlerinin style.display özelliğini 'none' yap
    const divs = [moviesDiv, tvShowsDiv, trendingDiv];
    divs.forEach(div => {
      div.style.display = 'none';
    });

    // Tıklanan strip-string elementinin yazı rengini mavi yap
    this.classList.add('active');

    // Tıklanan strip-string elementine ait data-name div'inin style.display özelliğini 'block' yap
    const selecteddDiv = document.querySelector(`div[data-name="${this.textContent.toLowerCase()}"]`);
    selecteddDiv.style.display = 'flex';
  });
});


