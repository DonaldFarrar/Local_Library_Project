function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
    return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
    return found;
}




// Pseudo Code


// declare a variable set equal to the loops length
// Loop through books.borrows
// if statements to see if the book is returned if so return the id of the book
// if statement to see if the book is NOT return return not returned


//return
  /*
// two arrays 1. not returned 2. has been returned
  
  */




function partitionBooksByBorrowedStatus(books) {
let yesReturn= [];
let noReturn = [];
  for (let i in books) {
   let borrowedBook = books[i].borrows;
   // console.log(borrowedBook);
    if (borrowedBook[0].returned === true) {    //originally had books.borrows.returned
      yesReturn.push(books[i]);
    }  if (borrowedBook[0].returned === false) {  //originally had books.borrows.returned
      noReturn.push(books[i]);
    } // I need a return statement here (return borrowedBook)
  }
return [noReturn, yesReturn]
}











//Pseudo Code

// GO THROUGH ALL OF THE BOOK.BORROWS
// LOOK AT EACH BORROWS OBJ ID
   
// LOOKING FOR THE ACCOUNT WITH THE SAME ID
    
// COMBINE THE ACCOUNT INFO AND THE BORROWS INFO
// RETURN PERSON ID THAT BORROWED



function getBorrowersForBook(book, accounts) {
  const findId = book.borrows;   //initialize a variable to start
  const borrowed = findId.map((borrow) =>  {      //loop through the book borrows id
    const person = accounts.find((person) => borrow.id === person.id);   //find accounts id that match
      return {...borrow, ...person};  //the spread operator shorts the code to gather entire list matching Id
  });
  borrowed.length = 10;

  return borrowed
} 














module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
