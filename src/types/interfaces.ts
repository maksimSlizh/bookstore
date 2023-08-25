interface Book {
  image: string
  isbn13: string
  price: string
  subtitle: string
  title: string
  url: string
}

interface BooksResponse {
  books: Book[]
}

interface BooksState {
  loading: boolean
  error: string | null
  data: Book[]
}

interface RootState {
  books: BooksState
}

export { Book, BooksResponse, BooksState, RootState }
