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

module.exports = { 
  addHyphensBetweenWords,
  generateCustomID
 };