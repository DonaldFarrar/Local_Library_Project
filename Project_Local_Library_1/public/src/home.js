
function getTotalBooksCount(books) {
 // return Object.keys(books);
 return books.length
}





function getTotalAccountsCount(accounts) {
  //return Object.keys(accounts);
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let total = 0;
    for (let i = 0; i < books.length; i++){
      let borrowed = books[i].borrows;
        if (borrowed[0].returned === false) {
           total++
        }
    }
     return total;
}


/*

Helper function

function helpFunc(nameVar, countVar) {
 return {name: nameVar, count: countVar}
}
*/


function getMostCommonGenres(books) {
  const usedGenres = [];
  return books
    .reduce((acc, book) => {
      const bookGenre = book.genre;
      if (usedGenres.includes(bookGenre)) {  // Pushed out all of the duplicates
        return acc;
      }
      const genreCount = books.filter(
        (novel) => novel.genre === bookGenre    // Matching the genres to see which others are there
      ).length;
      acc.push({ name: bookGenre, count: genreCount }); //Didn't need helper function
      usedGenres.push(bookGenre);
      return acc;
    }, [])
    .sort((genre1, genre2) => (genre1.count > genre2.count ? -1 : 1))
    .slice(0, 5);
}


 

function getMostPopularBooks(books) {
  return books
    .reduce((acc, book) => {
      const titleOfBook = book.title;
      const numOfBorrows = book.borrows.length;
      acc.push({ name: titleOfBook, count: numOfBorrows });
      return acc;
    }, [])
    .sort((book1, book2) => (book1.count > book2.count ? -1 : 1))
    .slice(0, 5);
}











function _sortObjectByValues(obj) {    // Helper function to sort values through my objects
  const keys = Object.keys(obj);

  return keys.sort((keyA, keyB) => {      // Need use of sort method to sort the values
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyB] > obj[keyA]) {
      return 1;
    } else {
      return 0;
    }
  });
}





function getMostPopularAuthors(books, authors) {
  const count = books.reduce((acc, { authorId, borrows }) => {
    if (acc[authorId]) {
      acc[authorId].push(borrows.length);
    } else {
      acc[authorId] = [borrows.length];
    }
    return acc;
  }, {});
  //console.log(count);

  for (let id in count) {
    const sum = count[id].reduce((acc, b) => acc + b);
    count[id] = sum;
  }
  //console.log(count);

  const sorted = _sortObjectByValues(count);
  //console.log(sorted);

  let arr = sorted
    .map((authorId) => {
      const {
        name: { first, last },
      } = authors.find(({ id }) => id === Number(authorId));
      let name = `${first} ${last}`;
      return { name, count: count[authorId] };
    })
    .slice(0, 5);
  console.log(arr);
  //{ name: "Cristina Buchanan", count: 112 },
  return arr;
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
