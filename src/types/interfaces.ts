export interface Books {
  image: string
  isbn13: string
  price: string
  subtitle: string
  title: string
  url: string
}

export interface BooksResponse {
  books: Books[]
}

export interface BooksState {
  loading: boolean
  error: string | null
  data: Books[]
}

export interface RootState {
  books: BooksState
}

export interface Book {
  error: string
  title: string
  subtitle: string
  authors: string
  publisher: string
  isbn10: string
  isbn13: string
  pages: string
  year: string
  rating: string
  desc: string
  price: string
  image: string
  url: string
  pdf: Pdf
}

export interface Pdf {
  [key: string]: string
}

// export { Book, BooksResponse, BooksState, RootState }
