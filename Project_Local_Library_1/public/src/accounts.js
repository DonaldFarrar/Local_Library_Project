
function findAccountById(accounts, id) {
    let found = accounts.find((account) => account.id === id);
    return found;
  }
  

function sortAccountsByLastName(accounts) {
let result = accounts.sort((personA, personB) => 
(personB.name.last < personA.name.last ? 1 : -1));
return result;
}


// We have an account object
// We have an array of all books
/* we need to get the total number of 
times the account the account ID appears 
in any book's `borrow` array.*/

//We declare a variable starting from zero to count how many times the book has been borrowed
//We need to loop through books object (for of loop)
//We need to loop through the borrows key
//set and if  statement with conditions borrows key loop === account argument with the id key
//If the if condition matches we will increments however many times it was borrowed
//return variable we declared from zero at the beginning of the function


function getTotalNumberOfBorrows(account, books) {
  let total = 0;
    for (let bookID of books) {
      for (let accountID of bookID.borrows) {
          if (accountID.id === account.id) {
            total++
          }
      }
    }
    return total;
}



//write pseudo code

//function getBooksPossessedByAccount(account, books, authors) {}

function getBooksPossessedByAccount(account, books, authors) {
  return books.reduce((acc, book) => {
    let cb = {...book.borrows[0]}
    const thisBook = {...book}
    if (cb.id === account.id && !cb.returned) {
      thisBook.author = authors.find((author) => author.id === thisBook.authorId)
      acc.push(thisBook)
    }
    return acc
  }, [])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
