import { storageService } from './async-storage.service.js'
import { utilService } from './util-service.js'
export const bookService = {
  query,
  get,
  addReview,
  // getAPIbooks,
  save,
}

const BOOKS_KEY = 'booksDB'
const BOOKS_API_KEY = 'booksAPI'
let gCatch = utilService.loadFromStorage(BOOKS_API_KEY) || {}

function query() {
  return storageService.query(BOOKS_KEY)
}

function get(id) {
  return storageService.get(BOOKS_KEY, id)
}

function addReview(bookId, review) {
  review.id = utilService.makeId()
  return storageService.get(BOOKS_KEY, bookId).then((book) => {
    if (!book.reviews) book.reviews = []
    book.reviews.push(review)
    console.log('book', book)
    return storageService.put(BOOKS_KEY, book)
  })
}

function save(book) {
  if (book.id) {
    console.log('save')
    return storageService.put(BOOKS_KEY, book)
  } else {
    return storageService.post(BOOKS_KEY, book)
  }
}

function getAPIbooks(keyword = 'javascript') {
  if (gCatch[keyword]) {
    console.log('Getting from cache')
    return Promise.resolve(gCatch[keyword])
  }
  const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${keyword}`

  return axios
    .get(url)
    .then(({ data }) => {
      const booksApi = data.items.map((results) => ({
        id: results.id,
        title: results.volumeInfo.title,
        authors: results.volumeInfo.authors,
        description: results.volumeInfo.description,
        subtitles: results.volumeInfo.subtitles,
        pageCount: results.volumeInfo.pageCount,
        categories: results.volumeInfo.categories,
        thumbnail: results.volumeInfo.imageLinks.thumbnail,
        language: results.volumeInfo.language,
        publishedDate: results.volumeInfo.publishedDate,
        publishedDate: results.volumeInfo.publishedDate,
        listPrice: {
          amount: 226,
          currencyCode: 'EUR',
          isOnSale: false,
        },
      }))
      return booksApi
    })
    .then((results) => {
      gBooksCache[keyword] = results
      utilService.saveToStorage(API_BOOK_KEY, gCatch)
      return results
    })
}
