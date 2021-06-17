function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

//first array is not returned, second array is returned
function partitionBooksByBorrowedStatus(books) {
  const filteredBorrowed = books.filter((book) => book.borrows[0].returned === false)
  const filteredReturned = books.filter((book) => book.borrows[0].returned === true)
  return [filteredBorrowed , filteredReturned]
}

//return an array of all transactions from book's borrows key
//each transaction should include account info and returned key
//account object with returned status added
function getBorrowersForBook({borrows}, accounts) {
  let arr = []
  const addToArr = borrows.forEach((borrower) => {
    const answer = accounts.find((account) => borrower.id === account.id)
    arr.push({...borrower, ...answer})
  })
  return arr.slice(0,10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
