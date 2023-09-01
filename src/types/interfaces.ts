export interface Book {
  image: string
  isbn13: string
  price: string
  subtitle: string
  title: string
  url: string
}

export interface BooksResponse {
  books: Book[]
}

export interface BooksState {
  loading: boolean
  error: string | null
  data: Book[]
}

export interface RootState {
  books: BooksState
}

// export { Book, BooksResponse, BooksState, RootState }
