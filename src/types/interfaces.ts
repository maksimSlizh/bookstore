export interface Book {
  error?: string;
  title: string;
  subtitle: string;
  authors?: string;
  publisher?: string;
  language?: string;
  isbn10?: string;
  isbn13: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  price: string;
  image: string;
  url: string;
  pdf?: Pdf;
}

export interface BooksResponse {
  books: Book[]
  error?: string
  page?: string
  total?: string
}

export interface BookState {
  loading: boolean;
  error: string | null;
  data: Book | [];
}

export interface BooksState {
  loading: boolean
  error: string | null
  data: Book[] | []
}

export interface RootState {
  books: BooksState
}

export interface Pdf {
  [key: string]: string
}

// export { Book, BooksResponse, BooksState, RootState }
