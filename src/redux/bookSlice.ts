import { createSlice, createAsyncThunk, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
import { requestBook } from '../services/books'
import { BookState, Book } from '../types/interfaces'
import { getDataLocalStorage, setDataLocalStorage } from '../helpers'

const fetchBook = createAsyncThunk<Book, string>('book/fetchBook', async (isbn13: string) => {
  const data = await requestBook(isbn13)
  return { ...data }
})

const initialState: BookState = {
  loading: false,
  error: null,
  data: {},
  dataLocal: getDataLocalStorage('book')!,
  dataLocalLoaded: false
}

const bookSlice = createSlice<BookState, SliceCaseReducers<BookState>>({
  name: 'book',
  initialState,
  reducers: {
    changeFavorite: (state, action: PayloadAction<Book>) => {
      const book = action.payload
      const existingBook = state.dataLocal.find((item: Book) => item.isbn13 === book.isbn13)
      if (existingBook) {
        existingBook.isFavorite = !existingBook.isFavorite
        if ((existingBook.isFavorite === false && !existingBook.hasOwnProperty('isCart')) ||
          (existingBook.isFavorite === false && existingBook.hasOwnProperty('isCart') && existingBook.isCart === false)) {
          const existingBookIndex = state.dataLocal.findIndex((item: Book) => item.isbn13 === book.isbn13)
          state.dataLocal.splice(existingBookIndex, 1)
        }
      } else {
        const newBook = {
          ...book,
          isFavorite: true,
        };
        state.dataLocal.push(newBook)
      }
      if (state.dataLocalLoaded) {
        setDataLocalStorage('book', state.dataLocal)
      }
    },
    changeCart: (state, action: PayloadAction<Book>) => {
      const book = action.payload
      const existingBook = state.dataLocal.find((item: Book) => item.isbn13 === book.isbn13)
      if (existingBook) {
        existingBook.isCart = !existingBook.isCart
        if ((existingBook.isCart === false && !existingBook.hasOwnProperty('isFavorite')) ||
          (existingBook.isCart === false && existingBook.hasOwnProperty('isFavorite') && existingBook.isFavorite === false)) {
          const existingBookIndex = state.dataLocal.findIndex((item: Book) => item.isbn13 === book.isbn13)
          state.dataLocal.splice(existingBookIndex, 1)
        }
      } else {
        const newBook = {
          ...book,
          isCart: true,
        };
        state.dataLocal.push(newBook)
      }
      if (state.dataLocalLoaded) {
        setDataLocalStorage('book', state.dataLocal)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.dataLocalLoaded = true
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export { fetchBook }
export const { changeFavorite, changeCart } = bookSlice.actions
export const bookReducer = bookSlice.reducer
