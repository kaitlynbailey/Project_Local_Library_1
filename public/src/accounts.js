function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastNameOne, lastNameTwo) => {
    return lastNameOne.name.last < lastNameTwo.name.last ? -1 : 1
  })
}

function getTotalNumberOfBorrows(account, books) {
  const identification = account.id
  return books.reduce((acc, book) => 
    acc += book.borrows.filter((borrower) =>
      borrower.id === identification).length
  , 0)
}

//array of book objects with author object embedded 
function getBooksPossessedByAccount({id}, books, authors) {
  let arr = []
  const addToArr = books.forEach((book) => {
    const borrowed = book.borrows[0]
    if(borrowed.id === id && borrowed.returned === false){
      book['author'] = authors.find((author) => author.id === book.authorId)
      arr.push(book)
    }
    return arr
  })
  return arr
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
