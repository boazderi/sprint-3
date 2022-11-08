import { bookService } from '../services/book.service.js'

export default {
  name: 'book-app',
  template: `
    <section class="book-app">
        <div class="filter-menu">
        
        <router-link to="/book/add">Add book</router-link>
        </div>
    
    <router-view></router-view>
    </section>
    `,
  data() {
    return {
      filterBy: null,
      selectedBook: null,
      books: [],
    }
  },
  created() {
    bookService.query().then((books) => {
      console.log('books', books)
      this.books = books
    })
  },
  methods: {
    selectBook(book) {
      this.selectedBook = book
      console.log('selectBook')
    },
    filter(filterBy) {
      console.log('filterBy', filterBy)
      this.filterBy = filterBy
      // this.books = books
    },
    removeBook(bookId) {
      console.log('removeBook')
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books
      console.log('booksToShow')
      const regex = new RegExp(this.filterBy.name, 'i')
      return this.books.filter((book) => {
        console.log('book', book)
        return regex.test(book.title)
      })
    },
  },
  components: {},
}
