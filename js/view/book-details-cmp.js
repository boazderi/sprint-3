import bookAppCmp from './book-app-cmp.js'
import { bookService } from '../services/book.service.js'
import { eventBus } from '../services/event-bus.service.js'

export default {
  name: 'book details',
  props: ['id'],
  template: `
        <ul v-if="book" class="book-details clear-list">
            <h1>Welcome {{$route.query.name}}</h1>
            <li><span class="book-detail-subject">Authors:</span> {{ authors }}</li>
            <li><span class="book-detail-subject">Categories:</span> {{ categories }}</li>
            <li><span class="book-detail-subject">Read during:</span>  {{readDuring}}</li>
            <li><span class="book-detail-subject">Published age:</span>  {{publishedAge}}</li>
            <li><span class="book-detail-subject">Price: </span><span 
            :class="{ 'high-price':isHigh, 'low-price': isLow  }"> {{formatCurrency}} </span></li>
            <li v-if="onSale"> <img src="../img/sale.png" width=50 alt="" /> </li>
            <long-text :txt="book.description"/>
            <router-link to="/book">Back</router-link>
            <!-- <li> <span class="book-detail-subject">Description:</span>  {{ getDescription }}</li> -->
            <review-add @reviewed='saveReview'/>
        </ul>
    `,
  data() {
    return {
      book: null,
    }
  },
  created() {
    //  console.log(this);
    console.log(this.id)
    const id = this.$route.params.id
    bookService.get(id).then((book) => (this.book = book))
  },
  methods: {
    saveReview(review) {
      console.log('review', review)
      bookService.addReview(this.book.id, review).then((book) => {
        this.book = book
        console.log(this.book)
        // const msg = {
        //     text: `Book ${this.book.title} was successfully added`,
        //     type: 'success',
        //     link: `/book/ ${book.id}`
        // }
        // eventBus.emit('user-msg', msg)
      })
    },
  },
  computed: {
    authors() {
      let authorsStr = ''
      this.book.authors.forEach((author) => {
        authorsStr += author + ', '
      })
      return authorsStr.substring(0, authorsStr.length - 2)
    },
    categories() {
      let categoriesStr = ''
      this.book.categories.forEach((category) => {
        categoriesStr += category + ', '
      })
      return categoriesStr.substring(0, categoriesStr.length - 2)
    },
    readDuring() {
      const bookSize = this.book.pageCount
      // o > 500–Longreading
      // o > 200 – Decent Reading
      // o < 100–LightReading
      if (bookSize > 500) return 'Long reading'
      else if (bookSize > 200) return 'Decent reading'
      else if (bookSize < 100) return 'Light reading'
    },
    publishedAge() {
      // o > 10 years ago – Veteran Book
      // o < 1Year–New!
      const bookPublished = this.book.publishedDate
      let currYear = new Date().getFullYear()
      if (currYear - bookPublished > 10) return 'Veteran Book'
      else if (currYear - bookPublished < 1) return 'New!'
    },
    isHigh() {
      return this.book.listPrice.amount > 150
    },
    isLow() {
      return this.book.listPrice.amount < 20
    },
    onSale() {
      return this.book.listPrice.isOnSale
    },
    formatCurrency() {
      console.log('start format')
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.book.listPrice.currencyCode,
      }).format(this.book.listPrice.amount)
    },
  },
  components: {},
}
