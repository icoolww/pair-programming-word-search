// PAIR PROGRAM: WORDSEARCH - NICOLAS REIMER - WILLIAM WIJAYA - APRIL 13/22

const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const columnObject = {};

  for (let row = 0; row < letters.length; row++) {

    for (let col = 0; col < letters[row].length; col++) {
            
      const letter = letters[row][col];
      const key = "Col" + col;

      if (!columnObject[key]) {
        columnObject[key] = letter;
      } else {
        columnObject[key] += letter;
      }
    }
  }
  let outputArr = Object.values(columnObject);

  for (let i = 0; i < outputArr.length; i++) {
            
    if (outputArr[i] === word) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;


