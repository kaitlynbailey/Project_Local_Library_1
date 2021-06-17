function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const checkedout = books.filter((book) => {
    return book.borrows[0].returned === false
  })
  return checkedout.length
}

function getMostCommonGenres(books) {
  const genreOnly = books.map((book) => book.genre)
  let arr = []
  let addToArr = genreOnly.forEach((genre) => {
    const findObj = arr.find((obj) => obj.name === genre)
    if(findObj) {
      const foundObj = arr.find((obj) => obj.name === genre)
      foundObj.count++
    }
    else arr.push({name: genre, count: 1})
    return arr
  })
  return arr.sort((genreA, genreB) => genreA.count < genreB.count ? 1: -1).slice(0, 5)
}
 
function getMostPopularBooks(books) {
  let arr = []
  const addToArr = books.forEach((book) => arr.push({name: book.title, count: book.borrows.length}))
  return arr.sort((bookA, bookB) => bookA.count < bookB.count ? 1: -1).slice(0, 5)
} 

//helper function 
function authorName(authors, authorID) {
  const author = authors.find((author) => author.id === authorID)
  const {name} = author  
  const first = name.first
  const last = name.last
  return `${first} ${last}`
}

function getMostPopularAuthors(books, authors) {
  let arr = []
  const addToArr = books.forEach((book) => {
    const authorId = book.authorId
    const count = book.borrows.length
    const name = authorName(authors, authorId)
    const findObj = arr.find((obj) => obj.name === name)
    if(findObj) findObj.count += count
    else arr.push({name: name, count: count})
    return arr
  })
  return arr.sort((authorA, authorB) => authorA.count < authorB.count ? 1: -1).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};