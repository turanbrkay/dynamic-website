function addHyphensBetweenWords(str) {
  if (str.length > 1) {
    return str.split(' ').join('-');
  } else {
    return str;
  }
} 
function generateCustomID(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function showFilterSearch() {
  var headSearch = document.getElementById("head-search");
  var searchWrapper = document.getElementById("search-wrapper");

  headSearch.classList.toggle("active");
  headSearch.classList.toggle("no-overflow");
  searchWrapper.classList.toggle("shown");
}

module.exports = { 
  addHyphensBetweenWords,
  generateCustomID,
  showFilterSearch
 };