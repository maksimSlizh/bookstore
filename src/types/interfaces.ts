export interface Book {
  error?: string
  title: string
  subtitle: string
  authors?: string
  publisher?: string
  language?: string
  isbn10?: string
  isbn13: string
  pages?: string
  year?: string
  rating?: string
  desc?: string
  price: string
  image: string
  url: string
  pdf?: Pdf
}

export interface BooksResponse {
  books: Book[]
  error?: string
  page?: string
  total?: number
}

export interface BookState {
  loading: boolean
  error: Error | null
  data: Book | []
}

export interface BooksState {
  loading: boolean
  error: string | null
  data: Book[] | []
  page?: number
  total?: number
}

export interface RootState {
  book: {
    loading: boolean,
    error: null | Error,
    data: Book
  },
  books: {
    loading: boolean,
    error: null | string,
    data: Book[]
  },
  booksSearch: {
    loading: boolean,
    error: null | string,
    page?: number,
    total?: number,
    data: Book[]
  },
  cart: Book[],
  favorite: Book[]
}

export interface Pdf {
  [key: string]: string
}
